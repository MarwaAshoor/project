import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { File } from '@ionic-native/file';
import { LoginProvider } from '../../providers/login/login';
/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  key:any;
  
  public uploadfile: File;
   public imgsource: any;
   public filename: string ;
  public temp:any;
  public msg:any;

  currUser:any;
   HandleFileSelect(evt){
    this.uploadfile = evt.target.files[0];
    this.filename = evt.target.files[0].name;
    this.temp=this.filename;
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public us:UserProvider, public file:File, public lp:LoginProvider) {
    this.key=this.navParams.get("x");
    
    this.currUser=this.lp.getuser();
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  addR(){
    var val={id: this.currUser.$key ,msg:this.msg, file: this.temp }
      this.us.addDInbox(this.key,val);

  }

  store(){
    // Extract filename from path
        this.filename = this.filename.replace(/\\/g,'/').replace(/.*\//, '');
     var imageRef = firebase.storage().ref().child( this.filename );
     imageRef.put(this.uploadfile)
     .then((res) => {
      	alert('Upload Success');
     }).catch((err) => {
     alert('Upload Failed' + err);
     });
   // alert( imageRef.fullPath );}
   
}

display() {
     firebase.storage().ref().child(this.temp)
      .getDownloadURL()
      .then((url) => {
           this.imgsource = url;
      })
  }
}  

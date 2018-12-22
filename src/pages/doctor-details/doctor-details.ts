import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserProvider } from '../../providers/user/user';
import { LoginProvider } from '../../providers/login/login';
import { ReportPage } from '../report/report';

/**
 * Generated class for the DoctorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-details',
  templateUrl: 'doctor-details.html',
})
export class DoctorDetailsPage {
  data: any;
  commentForm:FormGroup;
  comm:FirebaseListObservable<any>;
  currUser;
  commentsList:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public us:UserProvider, public fb:FormBuilder, public lp:LoginProvider) {
    this.data=this.navParams.get("x");

    this.commentForm=this.fb.group({
      comment:['']
    });

    this.comm=this.us.getDComments(this.data.$key);
    this.comm.subscribe(p =>{    
      this.commentsList=p;});

      this.currUser=this.lp.getuser();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorDetailsPage');
  }

  addComment(val){
    this.us.addDComment(this.data.$key,{comment:val.comment});
  }

  Report(){
    this.navCtrl.push(ReportPage,{x:this.data.$key});

  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-clinic-details',
  templateUrl: 'clinic-details.html',
})
export class ClinicDetailsPage {
  data: any;
  commentForm:FormGroup;
  comm:FirebaseListObservable<any>;
  commentsList:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public us:UserProvider, public fb:FormBuilder) {
    this.data=this.navParams.get("x");

    this.commentForm=this.fb.group({
      comment:['']
    });

    this.comm=this.us.getCComments(this.data.$key);
    this.comm.subscribe(p =>{    
      this.commentsList=p;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClinicDetailsPage');
  }

  addComment(val){
    this.us.addCComment(this.data.$key,{comment:val.comment});
  }

}

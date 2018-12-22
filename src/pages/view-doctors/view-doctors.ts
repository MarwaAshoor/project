import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserProvider } from '../../providers/user/user';
import { DoctorDetailsPage } from '../doctor-details/doctor-details';
import { SearchDProvider } from '../../providers/search-d/search-d';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the ViewDoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-doctors',
  templateUrl: 'view-doctors.html',
})
export class ViewDoctorsPage {

  doc:FirebaseListObservable<any>;
  Doctor: any[];
  searchItem: any;
  cUser: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public user:UserProvider, public searchD:SearchDProvider, public lp:LoginProvider) {
    this.initializeItem();
    this.cUser=this.lp.getuser();
}

initializeItem(){
  this.doc=this.user.getDoctors();
  this.doc.subscribe( p =>{
    this.Doctor=p;
});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewDoctorsPage');
  }

  openP(x){
    this.navCtrl.push(DoctorDetailsPage,{x:x});
  }

  getItems(){
    this.initializeItem();
    this.Doctor=this.searchD.filterItems(this.Doctor,this.searchItem);
  }

  addToFav(val){
    this.user.addFav(this.cUser.u.$key,val);
  }
}

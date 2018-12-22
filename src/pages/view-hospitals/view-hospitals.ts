import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { HospitalDetailsPage } from '../hospital-details/hospital-details';
import { SearchHProvider } from '../../providers/search-h/search-h';

/**
 * Generated class for the ViewHospitalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-hospitals',
  templateUrl: 'view-hospitals.html',
})
export class ViewHospitalsPage {

  Hos: FirebaseListObservable<any>;
  Hospitals: any[];
  searchItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public user:UserProvider, public searchH:SearchHProvider) {
    this.initializeItem();    
  }

  initializeItem(){
    this.Hos=this.user.getHospital();
    this.Hos.subscribe( p =>{
      this.Hospitals=p;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewHospitalsPage');
  }

  openP(x){
    this.navCtrl.push(HospitalDetailsPage,{x:x});
  }

  getItems(){
    this.initializeItem();   
    this.Hospitals=this.searchH.filterItems(this.Hospitals,this.searchItem);
  }

}

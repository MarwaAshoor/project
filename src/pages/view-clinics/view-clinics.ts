import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserProvider } from '../../providers/user/user';
import { ClinicDetailsPage } from '../clinic-details/clinic-details';
import { SearchCProvider } from '../../providers/search-c/search-c';


/**
 * Generated class for the ViewClinicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-clinics',
  templateUrl: 'view-clinics.html',
})
export class ViewClinicsPage {

  clin: FirebaseListObservable<any>;
  Clinic: any[];
  searchItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public user:UserProvider, public searchP:SearchCProvider) {
    this.initializeItem();
  }

  initializeItem(){
    this.clin=this.user.getClinics();
    this.clin.subscribe( p =>{
      this.Clinic=p;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewClinicsPage');
  }

  openP(x){
    this.navCtrl.push(ClinicDetailsPage,{x:x});
  }

  getItems(){
    this.initializeItem();
    this.Clinic=this.searchP.filterItems(this.Clinic,this.searchItem);
  }
}

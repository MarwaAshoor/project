import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { PatientDetailsPage } from '../patient-details/patient-details';
import { SearchPProvider } from '../../providers/search-p/search-p';

@IonicPage()
@Component({
  selector: 'page-view-patients',
  templateUrl: 'view-patients.html',
})
export class ViewPatientsPage {
  isDoc:boolean;
users:any;
pat:FirebaseListObservable<any>;
Patient: any[];
searchItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public lp:LoginProvider, public us:UserProvider, public searchP:SearchPProvider) {
      this.users=this.lp.getuser();
        this.isDoc=this.users.type;
        if(!this.isDoc){
          alert("Sorry! You Don't Have access rights to this page! Rerooting...");
          this.navCtrl.setRoot(HomePage);
        }

        
        this.initializeItem();   
      
    
  }
  initializeItem(){
    this.pat=this.us.getUsers();
      this.pat.subscribe(p => {
        this.Patient=p;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPatientsPage');
  }

  openP(x){
    this.navCtrl.push(PatientDetailsPage,{x:x});
  }

  getItems(){
    this.initializeItem();   
    this.Patient=this.searchP.filterItems(this.Patient,this.searchItem);
  }

  delete(key){
    this.us.removeUser(key);
    this.us.clearFav(key);
  }

}

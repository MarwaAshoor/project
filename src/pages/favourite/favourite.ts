import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserProvider } from '../../providers/user/user';
import { LoginProvider } from '../../providers/login/login';
import { DoctorDetailsPage } from '../doctor-details/doctor-details';

/**
 * Generated class for the FavouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage {
  favList:FirebaseListObservable<any>;
  fav: any[];
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public us:UserProvider, public lp:LoginProvider) {
    this.user=this.lp.getuser();
    this.favList=this.us.getFav(this.user.u.$key);
    this.favList.subscribe(p =>{
      this.fav=p;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritePage');
  }

  openP(x){
    this.navCtrl.push(DoctorDetailsPage,{x:x});
  }

  delete(key){
    this.us.removeFav(this.user.u.$key,key);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { UserProvider } from '../../providers/user/user';
import { ListPage } from '../list/list';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  users:any;
  user: any;
  isDoc:boolean;
  userKey: any;
  isHos;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lp:LoginProvider,public us:UserProvider) {

    this.users=this.lp.getuser();
    this.isDoc=this.users.type;
    this.user=this.users.u;
    this.userKey= this.users.key;
   
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    
  }

  update(){
    this.navCtrl.push(ListPage,{us:this.users});
  }

  delete(key){
    if(!this.isDoc){this.us.removeUser(key); this.us.clearFav(key); this.navCtrl.setRoot(LoginPage);}
    else if(this.isDoc){this.us.removeDoctor(key); this.us.clearFav(key); this.us.removeDComment(key); this.navCtrl.setRoot(LoginPage); }
    
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from '../../pages/signup/signup';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginform1: FormGroup;
  isLogin:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb:FormBuilder, public lp:LoginProvider) {
    this.loginform1=this.fb.group({
      email: ['',Validators.required],
      pass: ['',Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(val)
  {
    if (this.loginform1.valid)
    { 
      this.isLogin=this.lp.loginUser(val.email,val.pass);
      if(this.isLogin){ this.navCtrl.setRoot(HomePage);}
      
      
    }
   else{
     alert("Please enter valid email and password!");
   }
  }

  signup()
  {
    this.navCtrl.push(SignupPage);
  }
}

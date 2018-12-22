import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

loginform: FormGroup;
isDocOrPat=false;
isHosp=true;
isClin=false;
patient1: any;
Doc1: any;
Dep :FirebaseListObservable<any>;
Hos:FirebaseListObservable<any>;
Cli:FirebaseListObservable<any>;
Department: any[];
Hospital: any[];
Clinic: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb:FormBuilder, public us:UserProvider, public lp:LoginProvider) {

    this.loginform = fb.group({
      name: ['',Validators.compose([ Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      CPR:['',Validators.compose([Validators.maxLength(9),Validators.minLength(9), Validators.required])],
      email: ['',Validators.compose([Validators.maxLength(50),  Validators.pattern('[a-zA-Z0-9\-\_\. ]*@[a-zA-Z\-\_\.]{2,20}.[a-zA-Z]{2,4}'), Validators.required])],
      pass: ['',Validators.compose([Validators.maxLength(20), Validators.minLength(5),Validators.pattern('[a-zA-Z0-9\-\_ ]*'), Validators.required])],
      hos: [''],
      dep: [''],
      clinic:[''],
      tel: ['',Validators.compose([Validators.maxLength(8), Validators.minLength(8), Validators.pattern('[0-9]*'), Validators.required])],
     });

    this.Dep=this.us.getDepart();
    this.Dep.subscribe( p => {
	    this.Department = p ;
	});
    this.Hos=this.us.getHospital();
    this.Hos.subscribe (h => {
        this.Hospital = h;
      }); 

    this.Cli=this.us.getClinics();
    this.Cli.subscribe (c => {
      this.Clinic = c;
    });


      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(val){
    if(this.loginform.valid)
      { if(!this.isDocOrPat)
        { this.patient1={name: val.name, email: val.email, pass: val.pass, CPR:val.CPR, tel: val.tel};
          this.us.addUser(this.patient1);
          
         }
        else if(this.isDocOrPat && this.isHosp && !this.isClin)
        {
          this.Doc1={name: val.name, CPR:val.CPR, tel: val.tel, email: val.email, pass: val.pass,hos:val.hos, dep:val.dep, clinic:""};
           this.us.addDoc(this.Doc1);
           
        }
        else if(this.isDocOrPat && this.isClin &&!this.isHosp)
        {
          this.Doc1={name: val.name, CPR:val.CPR, tel: val.tel, email: val.email, pass: val.pass,hos: " ", dep:" ",clinic:val.clinic};
           this.us.addDoc(this.Doc1);
           
        }
      this.navCtrl.setRoot(LoginPage);
  }

      else
      alert("Enter Valid Email and Password Please!");
  }

  isDoc(){ this.isDocOrPat=true; }
  isPat(){ this.isDocOrPat=false; this.isClin=false; this.isHosp=false; this.loginform.value.hos=" "; this.loginform.value.clinic=" "; this.loginform.value.dep=" ";}
  isHos(){this.isHosp=true; this.isClin=false; this.loginform.value.clinic=" ";}
  isCli(){this.isClin=true; this.isHosp=false; this.loginform.value.hos=" "; this.loginform.value.dep=" ";}
}

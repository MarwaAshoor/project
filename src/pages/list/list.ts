import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  param: any;
  user: any;
  key: any;
  isDoc: any;
profileForm:FormGroup;
  constructor(public navCtrl:NavController, public navParam:NavParams, public fb:FormBuilder, public us:UserProvider)
  {
    this.param=this.navParam.get("us");
    this.user=this.param.u;
    this.isDoc=this.param.type;
    this.key=this.param.key;
    
    this.profileForm=this.fb.group({
      name: ['',Validators.compose([ Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      CPR:['',Validators.compose([Validators.maxLength(9),Validators.minLength(9), Validators.required])],
      email: ['',Validators.compose([Validators.maxLength(50),  Validators.pattern('[a-zA-Z0-9\-\_\. ]*@[a-zA-Z\-\_\.]{2,20}.[a-zA-Z]{2,4}'), Validators.required])],
      pass: ['',Validators.compose([Validators.maxLength(20), Validators.minLength(5),Validators.pattern('[a-zA-Z0-9\-\_ ]*'), Validators.required])],
      tel: ['',Validators.compose([Validators.maxLength(8), Validators.minLength(8), Validators.pattern('[0-9]*'), Validators.required])]
    })

  }

  update(val){
    if(this.isDoc){this.us.updateDoc(this.key,val); }
    else if(!this.isDoc){ this.us.updateUser(this.key,val);}
  }
  
}

import { Injectable } from '@angular/core';
import { UserProvider } from '../user/user';
import {FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class LoginProvider {
  currSession: boolean=false;
  currUser: any;
  userKey:any;
  us:FirebaseListObservable<any>;
  doc:FirebaseListObservable<any>;
  Users: any[];
  Docs:any[];

  check:boolean=false;
  constructor(public user:UserProvider) {
    this.us=this.user.getUsers();
    this.us.subscribe(p => {
      this.Users=p;
    });

    this.doc=this.user.getDoctors();
    this.doc.subscribe(p => {
      this.Docs=p;
    });

  }

  getuser(){var x={u:this.currUser, type:this.currSession, key:this.userKey};
return x;}


  loginUser(e1, p1){
    
    for(let i=0; i<this.Users.length; i++)
    {
      if(this.Users[i].email==e1)
      {
        this.check=true;

        if(this.Users[i].pass==p1){
          this.userKey=this.Users[i].$key;
          this.currUser=this.Users[i];
          this.currSession=false;
          alert("Welcome, "+ this.Users[i].name);
          return true;
        }
        else{
          alert("You Have Entered Invalid Password!");
          return false;}
      }
      
    }

    for(let j=0; j<this.Docs.length; j++){

      if(this.Docs[j].email==e1)
      {
        this.check=true;

        if(this.Docs[j].pass==p1){
           this.currSession=true;
        this.currUser=this.Docs[j];
        this.userKey=this.Docs[j].$key;
        alert("Welcome, "+this.Docs[j].name);
        return true;
        }
        else{
          alert("You Have Entered Invalid Password!");
          return false;}
      }
       
      }

      
        alert("You Have Entered Invalid Email!");
        return false;
    
    
    
  }

  logoutUser(){
    this.currSession=false;
    this.currUser=null;
    this.userKey=null;
    this.check=false;
    alert("Logout Successful!");
  }


   
  

}

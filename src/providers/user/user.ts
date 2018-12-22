import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
@Injectable()
export class UserProvider {
  data1: any[];
 constructor(public afdb: AngularFireDatabase) {
 }

getUsers() {return this.afdb.list('/proj/Patients/');}
getDoctors(){return this.afdb.list('/proj/Doctors/');}
getClinics(){return this.afdb.list('/proj/Clinics/');}
getHospital(){return this.afdb.list('/proj/Hospitals/');}
getDepart(){return this.afdb.list('/proj/Department/');}
getFav(key){return this.afdb.list('/proj/fav/'+key+'/');}
getCComments(key){return this.afdb.list('/proj/clinicComments/'+key+'/');}
getDComments(key){return this.afdb.list('/proj/doctorComments/'+key+'/');}
getHComments(key){return this.afdb.list('/proj/hospitalComments/'+key+'/');}
getDInbox(key){return this.afdb.list('/proj/DInbox/'+key+'/');}
getPInbox(key){return this.afdb.list('/proj/PInbox/'+key+'/');}

addDInbox(id,name){
  this.afdb.list('/proj/DInbox/'+id+'/').push(name)
  .then((response) => {
   if(response)
   alert('Report sent successfully!');
});
}

addPInbox(id,name){
  this.afdb.list('/proj/PInbox/'+id+'/').push(name)
  .then((response) => {
   if(response)
   alert('Prescription Sent successfully!');
});
}

addCComment(id,name)
{
  this.afdb.list('/proj/clinicComments/'+id+'/').push(name)
  .then((response) => {
   if(response)
   alert('Comment added successfully!');
});}

addDComment(id,name)
{
  this.afdb.list('/proj/doctorComments/'+id+'/').push(name)
  .then((response) => {
   if(response)
   alert('Comment added successfully!');
});}

addHComment(id,name)
{
  this.afdb.list('/proj/hospitalComments/'+id+'/').push(name)
  .then((response) => {
   if(response)
   alert('Comment added successfully!');
});}

removeDComment(id){
  this.afdb.list('/proj/doctorComments/').remove(id).then((reponse)=> {
  });
}



addFav(id,name){
  this.afdb.list('/proj/fav/'+id+'/').push(name)
          .then((response) => {
           if(response)
           alert('Doctor '+ name.name+' Added to Favourites Successfully');
    });

}
addUser(name) {
      this.afdb.list('/proj/Patients/').push(name)
          .then((response) => {
           if(response)
           alert('Patient Added Successfully');
    });
}

addDoc(name){
  this.afdb.list('/proj/Doctors/').push(name)
  .then((response) => {
   alert('Doctor Added Successfully');
});
}

removeUser(id) {
  this.afdb.list('/proj/Patients/').remove(id).then((reponse)=> {
    alert('Patient Record Removed Successfully!');
  })
}

removeDoctor(id){
  this.afdb.list('proj/Doctors/').remove(id).then((reponse)=> {
    alert('Doctor Record Removed Successfully!');
  })
}

removeFav(id,key){
  this.afdb.list('proj/fav/'+id+'/').remove(key).then((reponse)=> {
    alert('Favourite Removed Successfully!');
  })
}

clearFav(id){
 
  this.afdb.list('proj/fav/').remove(id).then((reponse)=> {
  });
}


updateUser(id,name){
    this.afdb.object('/proj/Patients/' + id).update({
      name: name.name,
      CPR: name.CPR,
      tel: name.tel,
      email: name.email,
      pass: name.pass
    }).then((response) => {
      alert('Update Patient Success');
    });}

    updateDoc(id,name){
      this.afdb.object('/Doctors/' + id).update({
        name: name.name,
        CPR: name.CPR,
        tel: name.tel,
        email: name.email,
        pass: name.pass
      }).then((response) => {
        alert('Update Doctor Success');
      });
}
      searchClinicDoc(name){
        
        var x=this.getDoctors();
        
        x.subscribe(p=>{
          this.data1=p;
        });
        var result:any[];

        for(let i=0; i<this.data1.length; i++)
        {
          if(this.data1[i].clinic==name){
           result.push(this.data1[i]);
          }
        }

        return result;
      }

    

    

}
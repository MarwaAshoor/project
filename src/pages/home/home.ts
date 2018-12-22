import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import {ViewClinicsPage} from '../../pages/view-clinics/view-clinics';
import {ViewDoctorsPage} from '../../pages/view-doctors/view-doctors';
import {ViewPatientsPage} from '../../pages/view-patients/view-patients';
import {ViewHospitalsPage} from '../../pages/view-hospitals/view-hospitals';
import { LoginProvider } from '../../providers/login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  isDoc;
  constructor(public navCtrl: NavController, public lp:LoginProvider){
     this.isDoc=this.lp.getuser();
     this.isDoc=this.isDoc.type;
  }


  gotohos(){this.navCtrl.setRoot(ViewHospitalsPage);}
  gotodoc(){this.navCtrl.setRoot(ViewDoctorsPage);}
  gotoclin(){this.navCtrl.setRoot(ViewClinicsPage);}
  gotopat(){this.navCtrl.setRoot(ViewPatientsPage);}
}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {ViewClinicsPage} from '../pages/view-clinics/view-clinics';
import {ViewDoctorsPage} from '../pages/view-doctors/view-doctors';
import {ViewHospitalsPage} from '../pages/view-hospitals/view-hospitals';
import { ViewPatientsPage } from '../pages/view-patients/view-patients';
import { LoginProvider } from '../providers/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { FavouritePage } from '../pages/favourite/favourite';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  user:any;
  pages: Array<{title: string, component: any,icon: string}>;
 
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public lp: LoginProvider) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home'},
      { title: 'Profile', component: ProfilePage, icon:'contact'},
      { title: 'Favourites', component: FavouritePage, icon:'heart'},
      { title:'Hospitals',component:ViewHospitalsPage, icon:"pulse"},
      { title:'Doctors',component:ViewDoctorsPage, icon:'school'},
      { title:'Clinics',component:ViewClinicsPage, icon:'medkit' },
      { title:'Patients',component:ViewPatientsPage, icon:'man' },
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.user=this.lp.getuser();
      this.user=this.lp.getuser();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  gotoPat()
  {
    this.nav.setRoot(ViewPatientsPage);
  }

  gotoLogin(){
    this.nav.setRoot(LoginPage);
  }
}

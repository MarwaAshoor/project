import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import {ViewClinicsPage} from '../pages/view-clinics/view-clinics';
import {ViewDoctorsPage} from '../pages/view-doctors/view-doctors';
import {ViewPatientsPage} from '../pages/view-patients/view-patients';
import {ViewHospitalsPage} from '../pages/view-hospitals/view-hospitals';
import { ClinicDetailsPage } from '../pages/clinic-details/clinic-details';
import { DoctorDetailsPage } from '../pages/doctor-details/doctor-details';
import { PatientDetailsPage } from '../pages/patient-details/patient-details';
import { HospitalDetailsPage } from '../pages/hospital-details/hospital-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SignupPage} from '../pages/signup/signup';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginProvider } from '../providers/login/login';
import { UserProvider } from '../providers/user/user';
import {IonicStorageModule } from '@ionic/storage';
import { SearchHProvider } from '../providers/search-h/search-h';
import { SearchDProvider } from '../providers/search-d/search-d';
import { SearchPProvider } from '../providers/search-p/search-p';
import { SearchCProvider } from '../providers/search-c/search-c';
import { ProfilePage } from '../pages/profile/profile';
import { FavouritePage } from '../pages/favourite/favourite';
import { ReportPage } from '../pages/report/report';

const firebaseConfig = {
  apiKey: "AIzaSyD3ggClqsCf0vXiAvTIItgZAXSst8gIrPU",
  authDomain: "project479-2aefd.firebaseapp.com",
  databaseURL: "https://project479-2aefd.firebaseio.com",
  projectId: "project479-2aefd",
  storageBucket: "project479-2aefd.appspot.com",
  messagingSenderId: "680858628631"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    FavouritePage,
    ViewClinicsPage,
    ViewDoctorsPage,
    ViewPatientsPage,
    ViewHospitalsPage,
    ClinicDetailsPage,
    DoctorDetailsPage,
    PatientDetailsPage,
    HospitalDetailsPage,
    ReportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    FavouritePage,
    ViewClinicsPage,
    ViewDoctorsPage,
    ViewPatientsPage,
    ViewHospitalsPage,
    ClinicDetailsPage,
    DoctorDetailsPage,
    PatientDetailsPage,
    HospitalDetailsPage,
    ReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    UserProvider,
    SearchHProvider,
    SearchDProvider,
    SearchPProvider,
    SearchCProvider
  ]
})
export class AppModule {}

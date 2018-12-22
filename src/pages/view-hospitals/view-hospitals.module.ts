import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewHospitalsPage } from './view-hospitals';

@NgModule({
  declarations: [
    ViewHospitalsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewHospitalsPage),
  ],
})
export class ViewHospitalsPageModule {}

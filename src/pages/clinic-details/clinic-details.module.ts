import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClinicDetailsPage } from './clinic-details';

@NgModule({
  declarations: [
    ClinicDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClinicDetailsPage),
  ],
})
export class ClinicDetailsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPatientsPage } from './view-patients';

@NgModule({
  declarations: [
    ViewPatientsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPatientsPage),
  ],
})
export class ViewPatientsPageModule {}

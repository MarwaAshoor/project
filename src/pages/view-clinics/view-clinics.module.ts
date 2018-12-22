import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewClinicsPage } from './view-clinics';

@NgModule({
  declarations: [
    ViewClinicsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewClinicsPage),
  ],
})
export class ViewClinicsPageModule {}

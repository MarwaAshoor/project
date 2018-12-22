import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewDoctorsPage } from './view-doctors';

@NgModule({
  declarations: [
    ViewDoctorsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewDoctorsPage),
  ],
})
export class ViewDoctorsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkWithUs } from './work-with-us';

@NgModule({
  declarations: [
    WorkWithUs,
  ],
  imports: [
    IonicPageModule.forChild(WorkWithUs),
  ],
  exports: [
    WorkWithUs
  ]
})
export class WorkWithUsModule {}

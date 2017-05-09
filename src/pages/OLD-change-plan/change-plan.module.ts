import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePlan } from './change-plan';

@NgModule({
  declarations: [
    ChangePlan,
  ],
  imports: [
    IonicPageModule.forChild(ChangePlan),
  ],
  exports: [
    ChangePlan
  ]
})
export class ChangePlanModule {}

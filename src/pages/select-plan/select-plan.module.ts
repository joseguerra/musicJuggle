import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectPlan } from './select-plan';

@NgModule({
  declarations: [
    SelectPlan,
  ],
  imports: [
    IonicPageModule.forChild(SelectPlan),
  ],
  exports: [
    SelectPlan
  ]
})
export class SelectPlanModule {}

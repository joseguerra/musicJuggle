import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalOutBudget } from './modal-out-budget';

@NgModule({
  declarations: [
    ModalOutBudget,
  ],
  imports: [
    IonicPageModule.forChild(ModalOutBudget),
  ],
  exports: [
    ModalOutBudget
  ]
})
export class ModalOutBudgetModule {}

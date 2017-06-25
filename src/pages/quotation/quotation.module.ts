import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Quotation } from './quotation';

@NgModule({
  declarations: [
    Quotation,
  ],
  imports: [
    IonicPageModule.forChild(Quotation),
  ],
  exports: [
    Quotation
  ]
})
export class QuotationPageModule {}

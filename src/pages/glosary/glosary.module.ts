import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Glosary } from './glosary';

@NgModule({
  declarations: [
    Glosary,
  ],
  imports: [
    IonicPageModule.forChild(Glosary),
  ],
  exports: [
    Glosary
  ]
})
export class GlosaryModule {}

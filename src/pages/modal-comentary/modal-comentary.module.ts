import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalComentary } from './modal-comentary';

@NgModule({
  declarations: [
    ModalComentary,
  ],
  imports: [
    IonicPageModule.forChild(ModalComentary),
  ],
  exports: [
    ModalComentary
  ]
})
export class ModalComentaryModule {}

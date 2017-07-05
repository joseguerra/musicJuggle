import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalQuestion } from './modal-question';

@NgModule({
  declarations: [
    ModalQuestion,
  ],
  imports: [
    IonicPageModule.forChild(ModalQuestion),
  ],
  exports: [
    ModalQuestion
  ]
})
export class ModalQuestionModule {}

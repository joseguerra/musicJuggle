import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Listen } from './listen';

@NgModule({
  declarations: [
    Listen,
  ],
  imports: [
    IonicPageModule.forChild(Listen),
  ],
  exports: [
    Listen
  ]
})
export class ListenModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Comentary } from './comentary';

@NgModule({
  declarations: [
    Comentary,
  ],
  imports: [
    IonicPageModule.forChild(Comentary),
  ],
  exports: [
    Comentary
  ]
})
export class ComentaryModule {}

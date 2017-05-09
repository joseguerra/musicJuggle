import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Recomendations } from './recomendations';

@NgModule({
  declarations: [
    Recomendations,
  ],
  imports: [
    IonicPageModule.forChild(Recomendations),
  ],
  exports: [
    Recomendations
  ]
})
export class RecomendationsModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { More } from './more';

@NgModule({
  declarations: [
    More,
  ],
  imports: [
    IonicPageModule.forChild(More),
  ],
  exports: [
    More
  ]
})
export class MoreModule {}

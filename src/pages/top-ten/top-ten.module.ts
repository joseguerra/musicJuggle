import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopTen } from './top-ten';

@NgModule({
  declarations: [
    TopTen,
  ],
  imports: [
    IonicPageModule.forChild(TopTen),
  ],
  exports: [
    TopTen
  ]
})
export class TopTenModule {}

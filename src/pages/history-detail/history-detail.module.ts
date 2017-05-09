import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryDetail } from './history-detail';

@NgModule({
  declarations: [
    HistoryDetail,
  ],
  imports: [
    IonicPageModule.forChild(HistoryDetail),
  ],
  exports: [
    HistoryDetail
  ]
})
export class HistoryDetailModule {}

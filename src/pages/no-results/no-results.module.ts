import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoResults } from './no-results';

@NgModule({
  declarations: [
    NoResults,
  ],
  imports: [
    IonicPageModule.forChild(NoResults),
  ],
  exports: [
    NoResults
  ]
})
export class NoResultsModule {}

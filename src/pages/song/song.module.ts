import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Song } from './song';

@NgModule({
  declarations: [
    Song,
  ],
  imports: [
    IonicPageModule.forChild(Song),
  ],
  exports: [
    Song
  ]
})
export class SongModule {}

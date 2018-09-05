import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomsViewPage } from './rooms-view';

@NgModule({
  declarations: [
    RoomsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomsViewPage),
  ],
})
export class RoomsViewPageModule {}

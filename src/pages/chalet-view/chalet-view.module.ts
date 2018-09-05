import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChaletViewPage } from './chalet-view';

@NgModule({
  declarations: [
    ChaletViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ChaletViewPage),
  ],
})
export class ChaletViewPageModule {}

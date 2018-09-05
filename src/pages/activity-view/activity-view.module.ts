import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityViewPage } from './activity-view';

@NgModule({
  declarations: [
    ActivityViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityViewPage),
  ],
})
export class ActivityViewPageModule {}

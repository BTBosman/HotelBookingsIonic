import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, ViewController } from 'ionic-angular';

import { AboutUsViewPage } from '../about-us-view/about-us-view';
import { RoomsViewPage } from '../rooms-view/rooms-view';
import { ChaletViewPage } from '../chalet-view/chalet-view';
import { ActivityViewPage } from '../activity-view/activity-view';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController,public viewCtrl:ViewController) {
  }
 
  presentModal(a) {
    const modal = this.modalCtrl.create(AboutUsViewPage);
    console.log(a);
    modal.present();
  }

  presentModal2(b) {
    const modal = this.modalCtrl.create(RoomsViewPage);
    console.log(b);
    modal.present();
  }

  presentModal3(c) {
    const modal = this.modalCtrl.create(ChaletViewPage);
    console.log(c);
    modal.present();
  }

  presentModal4(d) {
    const modal = this.modalCtrl.create(ActivityViewPage);
    console.log(d);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

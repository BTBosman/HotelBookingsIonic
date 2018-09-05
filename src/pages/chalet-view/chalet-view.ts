import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the ChaletViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chalet-view',
  templateUrl: 'chalet-view.html',
})
export class ChaletViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  book() {
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChaletViewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

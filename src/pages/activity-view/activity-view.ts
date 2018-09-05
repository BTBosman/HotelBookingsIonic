import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the ActivityViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity-view',
  templateUrl: 'activity-view.html',
})
export class ActivityViewPage {

  slides = [
    {
      title: "We have swimming Pools and Jacuzzi's!",
      description: "Lovely pools for you to relax at while you enjoy your stay, as well jacuzzi's!",
      image: "assets/imgs/pool.jpg",
    },
    {
      title: "We are bringing bowling to the Townships",
      description: "Enjoy competing against each other in our Bowling court",
      image: "assets/imgs/bowling.JPG",
      price: "from only R200"
    },
    {
      title: "Bike Rides",
      description: "We cater rides around Soweto passing great historical land marks around Soweto",
      image: "assets/imgs/bike.jpg",
      price: "from only R80 per bike"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityViewPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  book(){
    this.navCtrl.push(AboutPage);
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the AboutUsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-us-view',
  templateUrl: 'about-us-view.html',
})
export class AboutUsViewPage {

// var slideIndex = 1;
// showSlides(slideIndex);

slides = [
  {
    title: "Welcome to Ekasi Hotels",
    description: "Welcome to a little peice of paradise brought stright to the townships just for your enjoyment, Welcome to the best stay of your life!",
    image: "assets/imgs/aboutHotel3.jpg",
  },
  {
    title: "Beautiful bars just to relax!",
    description: "Enjoy great quality customer services from all the staff and expect a mean drink to be prepaired by our Quality Bar men.",
    image: "assets/imgs/aboutHotel8.jpg",
  },
  {
    title: "Lovely Spa for all the pampering needs",
    description: "Plenty of things to do in the spa from the sauna to a back message we also have hot rock massages.",
    image: "assets/imgs/spaday.JPG",
  }
];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsViewPage');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

  book(){
    this.navCtrl.push(AboutPage);
  }

}

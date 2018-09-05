import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var firebase;

/**
 * Generated class for the ReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html',
})
export class ReservationsPage {

  arr = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('Bookings /').on('value', (data:any) =>{
      var name = data.val();
      console.log(name);

      var keys:any = Object.keys(name);

      var checkIn = data.val();
      console.log(checkIn);

      for(var i = 0;i < keys.length;i++){
      var k = keys[i];
      
      let obj = {
        name: name[k].name,
        email: name[k].email,
        checkIn: name[k].checkIn,
        checkOut: name[k].checkOut,
        guests: name[k].guests,
        payment: name[k].payment,
        key:k,
        type: name[k].type
      }

      this.arr.push(obj);
      console.log(this.arr);
    }

  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationsPage');
  }
  }

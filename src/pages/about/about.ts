import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { Hotel } from '../../app/SaveArr';
import hotelArr from '../../app/Globalsave';
import { ConfirmationPage } from '../confirmation/confirmation';
import moment from 'moment';
import { ReservationsPage } from '../reservations/reservations';
import { HomePage } from '../home/home';

declare var firebase;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name;
  email;
  checkIn;
  checkOut;
  guests;
  payment;
  roomType;

  total=0;

 price = [2500,900, 1850, 1100, 2100, 3200, 2800,1200];
 description = ["Family Suite", "SingleBed", "2 single Beds", "1 Bedroom - Double", "2 Bedroom - Double", "Campers Chalet", "Family Charlet","Single chalet"]

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public alertCtrl:AlertController) {
  }

  Book(){

  // var currentDate = new Date()
  // var day = currentDate.getDate()
  // var month = currentDate.getMonth() + 1
  // var year = currentDate.getFullYear()

     if(this.name== undefined){
      const alert = this.alertCtrl.create({
        title: 'Please Note!',
        subTitle: 'Name cannot be left empty!',
        buttons: ['OK']
      });
      alert.present();
    }

    else if(this.email==undefined){  
      const alert = this.alertCtrl.create({
        title: 'Please Note!',
        subTitle: 'Email cannot be left empty!',
        buttons: ['OK']
      });
      alert.present();
    }

    else if(this.checkIn > this.checkOut){
      const alert = this.alertCtrl.create({
        title: 'Please Note!',
        subTitle: 'Check-in date cannot be the geater than checkout!',
        buttons: ['OK']
      });
      alert.present();
    }

    else if(this.checkIn==this.checkOut){
      const alert = this.alertCtrl.create({
        title: 'Please Note!',
        subTitle: 'Check-In date cannot be the same as check-Out!',
        buttons: ['OK']
      });
      alert.present();
    }

    else if(this.checkIn==undefined){
      const alert = this.alertCtrl.create({
        title: 'Please Note!',
        subTitle: 'Check-In date cannot be left empty!',
        buttons: ['OK']
      });
      alert.present();
    }

    else if(this.checkOut==undefined){
      const alert = this.alertCtrl.create({
        title: 'Please Note!',
        subTitle: 'Check-Out date cannot be left empty!',
        buttons: ['OK']
      });
      alert.present();
    }

    else if(this.guests==undefined){
      const alert = this.alertCtrl.create({
        title: 'Please Note!',
        subTitle: 'Guests cannot be left empty!',
        buttons: ['OK']
      });
      alert.present();
    }
    
    else if(this.payment==undefined){
      const alert = this.alertCtrl.create({
        title: 'Please Note!',
        subTitle: 'Payment option cannot be left empty!',
        buttons: ['OK']
      });
      alert.present();
    }

    
    else if(this.roomType==undefined){
      const alert = this.alertCtrl.create({
        title: 'Please Note!',
        subTitle: 'Please select a room type',
        buttons: ['OK']
      });
      alert.present();
    }

    else{

    var start = moment(this.checkIn, "YYYY-MM-DD");
    var end = moment(this.checkOut, "YYYY-MM-DD");
    var days = moment.duration(end.diff(start)).asDays();

     this.payment = this.price[this.roomType] * days;
      let res = new Hotel(this.name,this.email,this.checkIn,this.checkOut,this.guests,this.payment,this.roomType)
      hotelArr.push(res);
  
      console.log(hotelArr);

      firebase.database().ref('Bookings /').push({
        name: this.name,
        email: this.email,
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        guests: this.guests,
        payment: this.payment,
        type: this.description[this.roomType],
      });
      const toast = this.toastCtrl.create({
        message: 'Your booking was successfully saved',
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toast.present();
  
      this.navCtrl.push(ConfirmationPage);
    }  
  }

  ViewBook(){
      this.navCtrl.push(ReservationsPage);
    }

  home(){
    this.navCtrl.push(HomePage);
  }
}


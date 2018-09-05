import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutUsViewPage } from '../pages/about-us-view/about-us-view';
import { RoomsViewPage } from '../pages/rooms-view/rooms-view';
import { ChaletViewPage } from '../pages/chalet-view/chalet-view';
import { AuthProvider } from '../providers/auth/auth';
import { ActivityViewPage } from '../pages/activity-view/activity-view';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { ReservationsPage } from '../pages/reservations/reservations';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AboutUsViewPage,
    RoomsViewPage,
    ChaletViewPage,
    ActivityViewPage,
    ConfirmationPage,
    ReservationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AboutUsViewPage,
    RoomsViewPage,
    ChaletViewPage,
    ActivityViewPage,
    ConfirmationPage,
    ReservationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}

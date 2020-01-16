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
import { GaragePage } from '../pages/garage/garage';
import { VehicleSelectionPage } from '../pages/vehicle-selection/vehicle-selection';
import { BrandSelectionPage } from '../pages/brand-selection/brand-selection';
import { EngineSelectionPage } from '../pages/engine-selection/engine-selection';
import { CcSelectionPage } from '../pages/cc-selection/cc-selection';
import { LubricantsPage } from '../pages/lubricants/lubricants';
import { SuggestionProvider } from '../providers/suggestion/suggestion';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GaragePage,
    VehicleSelectionPage,
    BrandSelectionPage,
    EngineSelectionPage,
    CcSelectionPage,
    LubricantsPage
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
    GaragePage,
    VehicleSelectionPage,
    BrandSelectionPage,
    EngineSelectionPage,
    CcSelectionPage,
    LubricantsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SuggestionProvider
  ]
})
export class AppModule {}

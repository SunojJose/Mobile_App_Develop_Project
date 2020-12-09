import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuotesProvider } from '../providers/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { NewsPage } from '../pages/news/news';
import { IonicStorageModule } from '@ionic/storage';
import { IrelandProvider } from '../providers/ireland/ireland';
import { CanadaProvider } from '../providers/canada/canada';
import { UnitedstatesProvider } from '../providers/unitedstates/unitedstates';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	SettingsPage,
	NewsPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	SettingsPage,
	NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesProvider,
    IrelandProvider,
    CanadaProvider,
    UnitedstatesProvider
  ]
})
export class AppModule {}

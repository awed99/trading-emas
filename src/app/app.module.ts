import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { LocalNotifications } from '@ionic-native/local-notifications/ngx'
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx'
import { Autostart } from '@ionic-native/autostart/ngx'
import { HTTP } from '@ionic-native/http/ngx'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    Autostart,
    HTTP,
    StatusBar,
    SplashScreen,
    LocalNotifications,
    PhonegapLocalNotification,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private autostart: Autostart,
    private http: HTTP
    ) { 

    this.autostart.enable()

    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status)
        console.log(data.data) // data received by server
        console.log(data.headers)

      })
      .catch(error => {

        console.log(error.status)
        console.log(error.error) // error message as string
        console.log(error.headers)

      })

  }
}

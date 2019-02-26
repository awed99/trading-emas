import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'

import { HomePage } from './home.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {

  // constructor() { 
  //   setTimeout(() => {
  //       // this.pushNotif();
  //       let notifTitle  = 'My Title'
  //       let notifTag    = 'message1 Phonegape'
  //       let notifBody   = 'My body of Message Phonegape'
  //       let notifIcon   = '/assets/icon/favicon.png'

  //       GeneralModule.pushNotifPhonegap(notifTitle, notifTag, notifBody, notifIcon)
  //   }, 5000)

  }

}

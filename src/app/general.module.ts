import { LocalNotifications } from '@ionic-native/local-notifications'
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification'

export class GeneralModule {

  pushNotif (notifText, notifSound, notifKey) {
    
    // Schedule a single notification
    LocalNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification (Native Local)',
      sound: 'file://assets/sound/sound.mp3',
      data: { secret: 'key' }
    })

  }

  pushNotifPhonegap (notifTitle, notifTag, notifBody, notifIcon) {
     
    PhonegapLocalNotification.requestPermission().then(
      (permission) => {
          if (permission === 'granted') {

            // Create the notification
            PhonegapLocalNotification.create(notifTitle, {
              tag: notifTag,
              body: notifBody,
              icon: notifIcon
            })

          }
        }
    )

  }

}
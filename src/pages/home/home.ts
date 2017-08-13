import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private sms: SMS) {

  }

  /**
   * Send SMS to the Configured Number
   */
  sendSMS(): void {
    this.sms.send('84487755', 'Save Me...');
  }
}

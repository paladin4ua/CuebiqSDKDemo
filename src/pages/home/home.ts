import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var cuebiq;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  sendEvent() {
    cuebiq.collectCustomEvents("eventName", "eventInfo1", "eventInfo2", "eventInfo3", "eventInfo4"
        , () => console.log("Success")
        , () => console.log("Fail"));
  }

}

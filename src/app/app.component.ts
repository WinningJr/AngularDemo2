import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private router:Router) {  }
  
  title = 'AngularDemo2';

  displayMessage:String = 'Hello PUG World';
  bgColor:String = "green"

  buttonClick (pEvent: any) {
    console.log (pEvent.target.id)
    switch (pEvent.target.id) {
      case "button1":
        this.router.navigate (['navToScreen1']);
        break;
      case "button2":
        break;
    }
  } 

}

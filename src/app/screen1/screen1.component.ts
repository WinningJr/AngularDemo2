import { Component } from '@angular/core';
import { WebfunService } from '../services/webfun.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component {
  constructor (private webFunService: WebfunService) {}

  myInputValue: string = "Can anyone attend the PUG challenge?";   

  updateValue(pEvent: any) {
    switch (pEvent.target.id) {
      case 'inputQuestion':
        this.myInputValue = pEvent.target.value; 
        console.log (this.myInputValue)
        break;
    }
  }
  
  btnAsk () {
    this.webFunService.sendMessage (this.myInputValue).subscribe ({
      error: (e) => { 
        console.log (e)
      },   
      next: (data) => { 
        console.log (data)      
       }
    })
  } 


}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebfunService {
  constructor(  private httpClient: HttpClient,   ) {     }
  
  sendMessage (pMessage:string):  Observable<any> {    
    let pBody = {"questionText": pMessage}
    console.log ("message Sent", pBody)
    
    let uri = "/FunAPI/ProcessQuestion";
    let result = this.httpClient.post(
      uri, 
      pBody);
    return result;
  } 
}

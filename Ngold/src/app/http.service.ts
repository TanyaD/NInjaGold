import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
  constructor(private _http:HttpClient) {  
    this.getGold();  
  }

  getGold(){
    let tempObservable = this._http.get('/gold');
    tempObservable.subscribe(data => console.log("Got our golds!", data));
  }
  postResult(gold_amount,log){
    let tempObservable = this._http.post('/gold',gold_amount,log);
    tempObservable.subscribe(data => console.log("post the gold", data));
    console.log(tempObservable)
  }

}


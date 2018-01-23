import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  gold_amount=0;
  log=[]

  constructor(private _httpService:HttpService){
  }
  click(val){
    if (val == 'farm') {
      var temp = Math.floor(Math.random() * (5))
      this.gold_amount += temp
      this.log.push(`You earned ${temp} at the farm.`)
    }
    else if(val=='cave'){
    var temp = Math.floor(Math.random() * (5)+5)
    this.gold_amount += temp
    this.log.push(`You earned ${temp} at the cave.`)
    }
    else if (val == 'house') {
      var temp = Math.floor(Math.random() * (8) + 7)
      this.gold_amount += temp
      this.log.push(`You earned ${temp} at the house.`)
    }
    else if (val == 'casino') {
      var temp = Math.floor(Math.random() * (200) -100)
      this.gold_amount += temp
        this.log.push(`You earned ${temp} at the casino.`)
      
    
    this._httpService.postResult(this.gold_amount, this.log)
  }
  //getGoldFromService(){
    //let observable = this._httpService.getGold();
    //observable.subscribe(data => {
      //console.log("Got our gold!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      //this.gold = data['gold'];
   //});
  //}
}
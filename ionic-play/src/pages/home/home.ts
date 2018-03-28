import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];
    //populate a list of items with dummy records
    for(let i = 0; i < 10; i++){
      this.items.push({
        text: 'Item' + i,
        id: i
      })
    }

  }

  itemSelected(item){
    alert('This is ' + item.text);
  }

}

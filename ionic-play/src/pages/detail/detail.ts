import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    console.log(this.item);

    // at this point, in a real-world app we would probably 
    // get item description from a persitent storage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  items: any[];

  tagsRef: AngularFireList<any>;
  tags: Observable<any[]>;


  constructor(public navCtrl: NavController, 
    db: AngularFireDatabase) {
    this.items = [];
    //populate a list of items with dummy records
    for(let i = 0; i < 10; i++){
      this.items.push({
        text: 'Item' + i,
        id: i
      })
    }

    // let's get some attributes fro persistent storage
    this.tagsRef = db.list('messages');
    // Use snapshotChanges().map() to store the key
    this.tags = this.tagsRef.snapshotChanges().map(changes => {
      // the '...' operator will "extract"/spread the attributes from c.payload.val(),
      // making it easier to access these attributes
      // See https://reactjs.org/docs/jsx-in-depth.html#spread-attributes
      // for details
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });


  }

  itemSelected(item){
    // individual detail page will be created and pushed to navigational stack
    // we also pass information about the item to the detail page component
    this.navCtrl.push(DetailPage,
      { item: item }
    );
  }

  addTag(newName: string) {
    this.tagsRef.push({ text: newName });
  }
  updateTag(key: string, newText: string) {
    this.tagsRef.update(key, { text: newText });
  }
  deleteTag(key: string) {    
    this.tagsRef.remove(key); 
  }
  deleteAllTags() {
    this.tagsRef.remove();
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service consructed')
  }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums').map(res => res.json())
  }

}

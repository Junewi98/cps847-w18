import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name : string;
  title : string;
  address : Address;
  skills : string[];

  constructor() { 
    console.log("In constructor");
  }

  ngOnInit() {
    console.log("In ngOnInit");
    this.name = 'Jane';
    this.title = 'Developer';
    this.address = {
      street : 'Church St.',
      city : 'Toronto',
      province: 'ON'
    }
    this.skills = ['C++', 'JavaScript', 'Angular'];
  }

}

interface Address {
  street : string,
  city : string,
  province : string
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name;
  title;
  address : {
    street,
    city,
    province
  }

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
  }

}

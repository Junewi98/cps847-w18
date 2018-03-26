import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = 'Jane';
  title = 'Developer';
  address = {
    street : 'Church St.',
    city : 'Toronto',
    province: 'ON'
  }

  constructor() { }

  ngOnInit() {
  }

}

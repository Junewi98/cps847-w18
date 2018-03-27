import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  showSkills: boolean;
  albums: Album[];

  constructor(private dataService:DataService) { 
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
    this.showSkills = false;
    this.dataService.getAlbums().subscribe(albums => {
      console.log(albums)
      this.albums = albums;
    });
  }

  toggleSkills(){
    console.log("show skills")
    if(this.showSkills == false){
      this.showSkills = true;
    }else{
      this.showSkills = false;
    }
  }

  addSkill(newSkill){
    console.log(newSkill);
    this.skills.push(newSkill);
  }

  deleteSkill(ind){
    this.skills.splice(ind, 1)
  }

}

interface Address {
  street : string,
  city : string,
  province : string
}

interface Album{
  id: number;
  title: string;
  userId: number;
}
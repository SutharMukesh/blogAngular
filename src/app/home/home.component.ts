import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  public allBlogs = [{
    Id: 1,
    Name: "Blog1",
    Description: "Desc1",
    Author: "xyz"
  },
  {
    Id: 2,
    Name: "Blog2",
    Description: "Desc2",
    Author: "abc"
  },
  {
    Id: 3,
    Name: "Blog 3",
    Description: "Desc 3",
    Author: "xyz"
  }]

  constructor() { }

  ngOnInit() {
    console.log("youre in Home component")
  }
  ngOnDestroy(): void {
    console.log("youre destroying Home component")
  }
}

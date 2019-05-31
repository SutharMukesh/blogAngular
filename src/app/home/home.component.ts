import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  }

}

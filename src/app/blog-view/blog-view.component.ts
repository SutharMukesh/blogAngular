import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {
  public currentBlog;

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

  constructor(private _route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    console.log("youre in Blog-view Component")
    let blogId = this._route.snapshot.paramMap.get("blogId");
    this.currentBlog = this.getCurrentBlog(blogId);
    console.log(this.currentBlog);
  }
  ngOnDestroy(): void {
    console.log("youre destroying Blog-view component")
  }

  public getCurrentBlog = function (blogId) {
    for (let i in this.allBlogs) {
      if (this.allBlogs[i].Id == Number(blogId)) {
        return this.allBlogs[i];
      }
    }
  }
}

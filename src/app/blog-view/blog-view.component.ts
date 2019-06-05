import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {
  public currentBlog;

  // Here we read data from BlogService by initializing in constructor.
  constructor(private _route: ActivatedRoute, private router: Router, private BlogService: BlogService) {
  }

  ngOnInit() {
    console.log("youre in Blog-view Component")
    let blogId = this._route.snapshot.paramMap.get("blogId");
    this.currentBlog = this.BlogService.getCurrentBlog(blogId);
    console.log(this.currentBlog);
  }
  ngOnDestroy(): void {
    console.log("youre destroying Blog-view component")
  }


}

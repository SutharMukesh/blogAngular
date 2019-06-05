import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs;

  constructor(private BlogService: BlogService) { 
    console.log(BlogService)
    this.allBlogs = BlogService.getAllBlog();
  }

  ngOnInit() {
    console.log("youre in Home component")
  }
  ngOnDestroy(): void {
    console.log("youre destroying Home component")
  }
}

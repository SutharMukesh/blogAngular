/**
 * Common place for data 
 * all components will talk to this service to read/write data.
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  private allBlogs = [{
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
  },
  {
    Id: 4,
    Name: "Blog 4",
    Description: "Desc 4",
    Author: "xyz"
  }]

  constructor() {
    console.log("service constructor is called")
  }

  public getAllBlog():any{
    return this.allBlogs;
  }
  public getCurrentBlog(blogId):any {
    for (let i in this.allBlogs) {
      if (this.allBlogs[i].Id == Number(blogId)) {
        return this.allBlogs[i];
      }
    }
  }
}

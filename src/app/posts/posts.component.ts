import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';


import { User } from '../shared/user'
import { Post } from '../shared/post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private infoService: GetInfoService) { }


  posts:Array<Post>
  users:Array<User>
  noneFound:boolean



   
  findByUserId(id)
  { 

    if(!id)
    { 

      /// if no idea is provided it returns all users

      this.posts = this.infoService.getAllPosts()
      this.noneFound = false
    }

    else
    { 

      ///finds user with the id

      this.posts = this.infoService.findPostByUserId(id)

      if(this.posts.length == 0)
      {

        /// if finds no users it displays a message 

        this.noneFound = true
      }
      else
      {

        //// displays found users

        this.noneFound = false
      }
    }

  }

  getUser(id)
  {

    /// finds user by its id to display its name next to there task "would be much simpler with a relatinal DB"

    for(let i = 0; i < this.users.length; i++)
    {
      if(this.users[i].id == id)
      {
        return this.users[i].name
      }
    }
  }


  ///// gets all users and posts the time out is to make sure they were already loaded by the main component "I have not yet found a good work around this"

  ngOnInit() {
    setTimeout(() => {
      this.posts = this.infoService.getAllPosts()
    }, 500);
    

    setTimeout(() => {
      this.users = this.infoService.getAllUsers()
    }, 500);




  }

}

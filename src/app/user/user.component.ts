import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetInfoService } from '../get-info.service';
import { User } from '../shared/user'
import { Post } from '../shared/post'
import { Task } from '../shared/task'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private router : Router , private infoService: GetInfoService) { }

  user:User
  posts:Array<Post>
  tasks:Array<Task>
  editMode:boolean


  ///removes a user from its array in the service then navigates back to users page

  deleteUser(id)
  {
      this.infoService.deleteUser(id)
      this.router.navigate(['/users'])
  } 


  /// edits user in its array inside the service

  editUser(updatedUserInfo)
  {
     this.user = this.infoService.editUser(updatedUserInfo, this.user.id)
     this.editMode = false
  }


  /// finds one user by its id in the ar route the rest should be obvious by now

  ngOnInit() {
    this.ar.params.subscribe(id =>{
          setTimeout(() => {
            this.user = this.infoService.getUser(id.id)
            
          }, 50);

          setTimeout(() => {
            this.posts =  this.infoService.findPostByUserId(id.id)
            console.log(this.posts)
          }, 500);



       setTimeout(() => {
          this.tasks =  this.infoService.getUserTasks(id.id)
        }, 500);


    })
  }

}

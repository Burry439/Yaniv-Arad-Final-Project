import { Component, OnInit} from '@angular/core';
import { GetInfoService } from '../get-info.service';
import { Router } from '@angular/router';

import { User } from '../shared/user'



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private infoService : GetInfoService,private router :Router) { }

    users:Array<User>


   //// navigates to single user page passses the user id as a qury param

    toUser(id)
  {   
     this.router.navigate(['/user', id])  
  }




  ngOnInit()  
  { 
      setTimeout(() => {
          this.users = this.infoService.getAllUsers()
      }, 500);
    
  }

}

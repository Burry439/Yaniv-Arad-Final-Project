import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';
import { Router } from '@angular/router';

import { User } from '../shared/user'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private infoService: GetInfoService, private router : Router) { }

  search:String

  foundUsers:Array<User>

  noneFound:boolean


  /// navigates to the single user page with its id

  toUser(id)
  {   
     this.router.navigate(['/user', id])  
  }


  

  find()
  {   
      ///// finds all users that match the search
     this.foundUsers = this.infoService.findUsers(this.search)
     if(this.foundUsers.length == 0)
     {  

      //// if none are found it displays a message
        this.noneFound = true
     }
     else
     {
       /// if it finds users it will not display or remove the message
      this.noneFound = false
     }
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private infoService : GetInfoService) { }

  ngOnInit() {

////// gets all users posts and tasks and adds it to there arrays in the Info Service ////


    this.infoService.loadUsers()
    this.infoService.loadPosts()
    this.infoService.loadTasks()
  }

}

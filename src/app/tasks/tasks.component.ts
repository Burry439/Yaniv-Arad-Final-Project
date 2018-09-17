import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';


import { Task } from '../shared/task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private infoService : GetInfoService) { }

  tasks:Array<Task>



  filterTasks(filterBy)
  {                
        if(filterBy == 'all')
        {   

          /// if all returns all tasks
          this.tasks = this.infoService.getAllTasks()
        } 
        else
        { 

            // returns all ask that are either true or false
           this.tasks = this.infoService.filterTasks(filterBy)
        }
  }


  /// gets all tasks the time out is here to make sure its been loaded by the main component

  ngOnInit() {
    setTimeout(() => {
      this.tasks = this.infoService.getAllTasks()
    }, 500);
  }

}

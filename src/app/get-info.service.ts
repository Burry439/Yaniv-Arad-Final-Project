import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


import { User } from './shared/user'
import { Post } from './shared/post'
import { Task } from './shared/task'



@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  constructor(private http : HttpClient) { }

  allUsers:Array<User>
  allPosts:Array<Post>
  allTasks:Array<Task>


  //// users routes/////////////////////

  //// gets all users and saves it the array

  loadUsers()
  {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:Array<User>) =>{
      this.allUsers = res
    })
  }

  // gives all users to a component

  getAllUsers()
  { 
     return this.allUsers 
  }


  /// edits the user inside the array and returns that user

  editUser(updatedUser,id)
  { 
      for(let i = 0; i < this.allUsers.length; i++)
      {
        if(this.allUsers[i].id = id)
        {
          this.allUsers[i].name = updatedUser.name
          this.allUsers[i].email = updatedUser.email
          this.allUsers[i].address.city = updatedUser.city
          return this.allUsers[i]
        }
      }
  }

  /// deletes the user insdie the array then returns the array

  deleteUser(id)
  {
     for(let i = 0; i < this.allUsers.length; i++)
     {
       if(this.allUsers[i].id == id)
       {
         this.allUsers.splice(i,1)
       }
     }
     return this.allUsers
  }

  /// returns a new filtered array from the users array

  findUsers(name)
  { 
      console.log(name)
      return this.allUsers.filter((user)=>{
         return user.name.toLowerCase().includes(name.toLowerCase())
      })
    
  }

  //// returns one user by its id from the user Array

  getUser(id)
  {
    for(let i = 0; i < this.allUsers.length; i++)
    {
        if(this.allUsers[i].id == id)
        {
          return this.allUsers[i]
        }
    }

  }

  
  ////////////////////////////


///////////post routes


/// adds all posts to the post array

loadPosts()
{
   this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res:Array<Post>) =>{
     this.allPosts = res
   })
}

  //// returns the whole post array

  getAllPosts()
  {
    return this.allPosts
  }

  //retunrs posts from the post array that match the User ID

  findPostByUserId(id)
  {
    console.log(id)
       return this.allPosts.filter(post =>{
       return  post.userId == id
    })
  }



  ///////////////////////////
    

  ////task routes //////////////////


  /// loads al tasks into the task array


  loadTasks()
  {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((res:Array<Task>) =>{
      this.allTasks = res
    })
  }


  // returns all tasks to a component

  getAllTasks()
  {
    return this.allTasks
  }


  ///retruns a new filterd task array

  filterTasks(filterBy)
  { 
      return this.allTasks.filter(task =>{
      return  task.completed == filterBy
     })
  }


  // gets tasks that matches a users ID

  getUserTasks(id)
  {
       return this.allTasks.filter(task =>{
       return  task.userId == id
    })
  }

}
////////////////////
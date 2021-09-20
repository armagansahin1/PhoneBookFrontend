import { Component, OnInit } from '@angular/core';
import { UserViewModel } from 'src/app/models/userViewModel';



import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  users:UserViewModel[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getActiveUsers();
    localStorage.removeItem("userId")
    
  }

  getActiveUsers(){
    this.userService.getActiveUsers().subscribe(response=>{
      this.users = response.data;
    })
  }

  usStyleControl():boolean{
     if(localStorage.getItem("Us style") == "true"){
       return true
     }else{
       return false
     }
  }

  getUserId(userId:number){
    localStorage.setItem("userId",JSON.stringify(userId))
  }

  setSelectedUserDiv(selectedUser:number):boolean{

    var userId = Number.parseInt(localStorage.getItem("userId"))
    
    if(selectedUser === userId){
      return true
    }else{
      return false
    }
  }


}

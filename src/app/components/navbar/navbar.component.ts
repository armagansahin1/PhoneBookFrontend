import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isChecked:boolean = false
  userId:number
  
  constructor(private route:Router, private toastr:ToastrService,private userService:UserService) { }

  ngOnInit(): void {
    
    if(localStorage.getItem("Us style") == null)
    {
       localStorage.setItem("Us style","false")
    }
    this.userId = Number.parseInt(localStorage.getItem("userId"))
  }

  onChangeUsStyleCheckBox(e){
    var check = e.target.checked;
    JSON.stringify(check)
    localStorage.setItem("Us style",check)
  }

  checkControlForUsStyle():boolean{
    if(localStorage.getItem("Us style") == "true"){
      return true
    }else{
      return false
    }
  }

  sendToEditPage(){
    if(localStorage.getItem("userId") != null){
        this.route.navigate(["/edit-contact"])
    }else{
      this.toastr.warning("User not selected")
    }
  }

  deleteUser(){
      if(localStorage.getItem("userId") != null){
        
        var userId = Number.parseInt(localStorage.getItem("userId"))
        this.userService.getUser(userId).subscribe(response=>{
          this.userService.delete(response.data).subscribe(response=>{
            this.toastr.info(response.message)
            location.reload();
          })
        }) 

      }else{
        this.toastr.warning("User not selected")
      }
  }

}

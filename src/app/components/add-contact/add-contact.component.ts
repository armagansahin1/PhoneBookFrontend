import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from "@angular/forms"
import {Router} from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {


  constructor(private formBuilder:FormBuilder,private userService:UserService,private toastr:ToastrService,private router:Router) { }
  
    userAddForm:FormGroup

  ngOnInit(): void {
    this.createUserAddForm()
  }
   createUserAddForm(){
        this.userAddForm = this.formBuilder.group({
        firstName:["",Validators.required],
        lastName:["",Validators.required],
        phoneNumber:["",Validators.required],
        gender:["",Validators.required]
      })
   }

   add(){
     if(this.userAddForm.valid){
      let userModel = Object.assign({},this.userAddForm.value)
      this.userService.add(userModel).subscribe(response=>{
         if(response.success){
          this.toastr.success(response.message)
          this.router.navigate([""])
         }else{
           this.toastr.error(response.message)
         }
          
      })
     }else{
       this.toastr.warning("Please fill out the form completely")
     }
     
   
   }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { UserUpdateModel } from 'src/app/models/userUpdateModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  user:User
  userUpdateForm:FormGroup
  constructor(private formBuilder:FormBuilder,private userService:UserService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.createUserUpdateForm()
  }


  createUserUpdateForm(){
    
    this.userUpdateForm = this.formBuilder.group({

      firstName : ["", Validators.required],
      lastName : ["", Validators.required],
      phoneNumber : ["", Validators.required],
      gender : ["", Validators.required]
    })
  }

  update(){
      if(this.userUpdateForm.valid){
        let userUpdateModel:UserUpdateModel = Object.assign({},this.userUpdateForm.value)
        userUpdateModel.id =  Number.parseInt(localStorage.getItem("userId"))
        this.userService.update(userUpdateModel).subscribe(response=>{
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

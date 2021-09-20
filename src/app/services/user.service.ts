import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAddModel } from '../models/userAddModel';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { UserViewModel } from '../models/userViewModel';
import { UserUpdateModel } from '../models/userUpdateModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:8080/api/users/"
  constructor(private httpClient:HttpClient) { }

  getActiveUsers():Observable<ListResponseModel<UserViewModel>>{
    let newPath = this.apiUrl+"getUsersViewModel";
    return this.httpClient.get<ListResponseModel<UserViewModel>>(newPath);
  }

  add(userAddModel:UserAddModel):Observable<ResponseModel>{
    let newPath = this.apiUrl+"add"
    return this.httpClient.post<ResponseModel>(newPath,userAddModel)
  }

  getUser(userId:number):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl+"getById?id=" + userId
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }
  
  update(userUpdateModel:UserUpdateModel):Observable<ResponseModel>{
    let newPath = this.apiUrl+"update"
    return this.httpClient.post<ResponseModel>(newPath,userUpdateModel)
  }
  delete(user:User):Observable<ResponseModel>{
    let newPath = this.apiUrl + "delete"
    return this.httpClient.post<ResponseModel>(newPath,user)
  }
}

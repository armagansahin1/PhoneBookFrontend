import { Pipe, PipeTransform } from '@angular/core';
import { UserViewModel } from '../models/userViewModel';


@Pipe({
  name: 'nameStyle'
})
export class NameStylePipe implements PipeTransform {

  transform(fullName:string, isChecked:boolean):string {

    var splitedName = fullName.split(" ",2)
    var firstName = splitedName[0].charAt(0).toUpperCase() + splitedName[0].slice(1)
    var lastName = splitedName[1].charAt(0).toUpperCase() + splitedName[1].slice(1)

    if(isChecked){
       
       var usStyleName = lastName + ", " + firstName
       return usStyleName
    }
    return firstName + " " + lastName
  }

}

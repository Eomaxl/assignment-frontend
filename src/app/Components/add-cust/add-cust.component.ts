import { IUser } from './../../Interfaces/iuser';
import { UserService } from './../../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../Class/User';



@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.css']
})
export class AddCustComponent implements OnInit {

  userModel = new User(1,'','','','');
  user:IUser;
  constructor(private userService:UserService) { }
  

  ngOnInit() {
  }

  createUser(){
    
   
    this.user = {'name':{'firstName':this.userModel.firstName,'lastName':this.userModel.lastName},'birthday':this.userModel.birthday,'gender':this.userModel.gender};
    console.log(this.user);
     this.user.customerID =null;
     this.userService.createUser(this.user).subscribe(
       user => alert(`A new user was created with an id: ${user.customerID}`),
       err =>alert(`Got an error as : ${err}`),
       ()=> alert(`Creation of user completed`)
      
     )
  }
}

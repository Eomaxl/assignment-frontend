import { UserService } from './../../Service/user.service';
import { IUser } from './../../Interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:IUser;
  
  
  
  
  constructor(private activatedRoute : ActivatedRoute,
    private userService: UserService) { }

 ngOnInit() {
   
    this.activatedRoute.params.subscribe( (params)=>{
   
    this.userService.getUserByIdViaRest(+params[`id`]).subscribe(
      user => this.user = user,
      err => console.log('Got an error while fetching the user details: ', err),
      
    )
  });
  
    console.log(JSON.stringify(this.user));
  }

  createUser(){
    this.user.customerID =null;
    this.userService.createUser(this.user).subscribe(
      user => alert(`A new user was created with an id: ${user.customerID}`),
      err =>alert(`Got an error as : ${err}`),
      ()=> alert(`Creation of user completed`)
    )
  }
  updateUser(){
    this.userService.updateUser(this.user).subscribe(
      user => alert(`A new user was updated`),
      err =>alert(`Got an error as : ${err}`),
      ()=> alert(`Updation of user completed`)
    )
  }
  deleteUser(){
    this.userService.deleteUser(this.user.customerID).subscribe(
      user => alert(`A new user was created with an id: ${user.customerID}`),
      err =>alert(`Got an error as : ${err}`),
      ()=> alert(`Deletion of user completed`)
    )
  }

}
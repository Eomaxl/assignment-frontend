import { UserService } from './../../Service/user.service';
import { IUser } from './../../Interfaces/iuser';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
   // this.users = this.userService.getUsers();
   this.userService.getUsersViaRest().subscribe(
     users => this.users = users
   );
   console.log(JSON.stringify(this.users));
  }
  
}

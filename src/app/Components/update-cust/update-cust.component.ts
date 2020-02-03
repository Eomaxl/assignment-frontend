import { Component, OnInit ,Input } from '@angular/core';
import { IUser } from './../../Interfaces/iuser';
import { UserService } from './../../Service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-cust',
  templateUrl: './update-cust.component.html',
  styleUrls: ['./update-cust.component.css']
})
export class UpdateCustComponent implements OnInit {
  user:any;
  
  constructor(private activatedRoute : ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params)=>{
   
      this.userService.getUserByIdViaRest(+params[`id`]).subscribe(
        user =>this.user = user,
        err => console.log('Got an error while fetching the user details: ', err))
    });
  


  }
  
}

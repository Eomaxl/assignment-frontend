
import { IUser } from './../Interfaces/iuser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  //private _rootUrl:string  = 'https://jsonplaceholder.typicode.com/users';
  //private _rootUrl:string ="http://localhost:3000/users";
  private _rootUrl:string ="https://webtrekk-frontend.herokuapp.com/users";
  private _users:IUser[];
  
  constructor(private http:HttpClient)
   { }

  //Fetching all the users
  getUsersViaRest():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._rootUrl,{});
  }

  getUserById(customerID:number):IUser{
    return this._users.filter(user =>user.customerID === customerID)[0];
  }

  getUserByIdViaRest(customerID:number):Observable<IUser>{
    return this.http.get<IUser>(`${this._rootUrl}/${customerID}`);
  }

  createUser(user:IUser):Observable<IUser>
  {
    return this.http.post<IUser>(this._rootUrl,user);
  }

  updateUser(user:IUser):Observable<IUser>
  {
    return this.http.patch<IUser>(`${this._rootUrl}/${user.customerID}`,user);
  }

  deleteUser(customerID:number):Observable<IUser>
  {
    return this.http.delete<IUser>(`${this._rootUrl}/${customerID}`);
  }
}
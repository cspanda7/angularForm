import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { User } from "../app/user.model";
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html' 
})
export class UserListComponent implements OnInit {
  Users:User[];
  constructor(private userService:UserService) { }
  ngOnInit() {
    this.userService.userChanged.subscribe(
      (users:User[])=>{this.Users=users}
    )
    this.Users=this.userService.getUsers();
  }
}
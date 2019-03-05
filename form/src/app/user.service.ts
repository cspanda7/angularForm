import {EventEmitter,Injectable} from "@angular/core"
import {Subject} from "rxjs"
import { User } from "../app/user.model";

export class UserService {
    userChanged=new Subject<User[]>();
    userSelected=new EventEmitter<User>();
    private Users:User[]=[ 
        {
            firstName:'chandra',
            lastName:'Panda',
            email:'cpanda@gmail.com',
            education:[{
                item_id:1,
                item_text:'Secondary'
            }],
            userName:'user1',
            password:'password'
        }   
    ];

    constructor(){

    }
    getUsers(){
        debugger
          return this.Users.slice();
      }
    getUsersById(index:number){
        return this.Users[index];
      }
    addUsers(user:User){
        debugger;
        this.Users.push(user);
        this.userChanged.next(this.Users.slice());
        console.log(this.Users);
      }
    updateUser(index:number,newUser:User){
        this.Users[index]=newUser;
        this.userChanged.next(this.Users.slice());
      }
    deleteUser(index:number){
        debugger;
    this.Users.splice(index,1);
    this.userChanged.next(this.Users.slice());
    }
}
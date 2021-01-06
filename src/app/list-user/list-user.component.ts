import { Component, OnInit } from '@angular/core';
import {IUser} from '../iuser';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  // @ts-ignore
  listUser: IUser[];
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  // @ts-ignore
  getAllUsers(): IUser[] {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.listUser = data;
      console.log(this.listUser);
    });
    return this.listUser;
  }
}

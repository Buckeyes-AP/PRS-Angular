import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  

  constructor(
    private usesvc: UserService
  ) { }

  ngOnInit(): void {
    this.usesvc.list().subscribe({
      next: (res) => {
        this.users = res;
        console.debug("Users", res);
      },
      error: (err) => {
      console.error();
      }
      
    });
  }

}

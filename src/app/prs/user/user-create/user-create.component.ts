import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../request/request.service';
import { SystemService } from '../../system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

 


  constructor(
    private usesvc: UserService,
    private sys: SystemService,
    private router: Router,
  ) { }

  save(): void{
    this.usesvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("User added");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {

  }

}

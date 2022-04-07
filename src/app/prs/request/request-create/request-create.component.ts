import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users!: User[];

  constructor(
    private reqsvc: RequestService,
    private usesvc: UserService,
    private router: Router

  ) { }

  save(): void {
    this.request.userId = +this.request.userId;
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request added");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => { console.error(err); }
    });
  }

  ngOnInit(): void {
    this.usesvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      }
    })
  }

}

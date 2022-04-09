import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private logsvc : UserService,
    private syst : SystemService,
    private router: Router
  ) { }

  submit(): void {
    this.logsvc.login(this.username, this.password).subscribe({
      next: (res) => { 
        this.syst.user = res;
        console.log("Login successful!"); 
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        console.error("Login unsuccessful!");
      }

    });
    
  }

  ngOnInit(): void {
  }

}

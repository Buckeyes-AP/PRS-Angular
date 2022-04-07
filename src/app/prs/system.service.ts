import { ApplicationInitStatus, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/user.class';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user!: User | null

  constructor(
    private appinit: ApplicationInitStatus,
    private router: Router
  ) { }

  get isAdmin(){}

  chkLogin(): void {
    if(!thisisloggedIn){
      this.router.navigateByUrl("/login");
    }
  }
}

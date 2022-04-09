import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user/user.class';



@Injectable({
  providedIn: 'root'
})
export class SystemService {



  user!: User;
  


  constructor(
    private router: Router
  ) { }



  chkLogin(): void {
    if(!this.user == null){
      this.router.navigateByUrl("/login");
    }
  }
}

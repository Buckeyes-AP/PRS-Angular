import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests!: Request[];

  sortColumn: string = "status";
  sortOrderAsc: boolean = true;


  constructor(
    private syst: SystemService,
    private reqsvc: RequestService
  ) { }

  

  ngOnInit(): void {
    this.syst.chkLogin();
    this.reqsvc.reviews(this.syst.user.id).subscribe({
      next: (res) => {console.log (res) 
      this.requests = res},
      error: (err) => {console.error (err)}
    })

  
  
    
 
   
  }

}

import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests!: Request[];

  constructor(
    private syst: SystemService,
    private reqsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.syst.chkLogin();
  
   
  }

}

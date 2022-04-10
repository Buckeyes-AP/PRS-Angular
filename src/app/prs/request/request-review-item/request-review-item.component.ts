import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Requestline } from '../../requestline/requestline.class';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  requests!: Request;
  showVerifyButton: boolean = false;

  constructor(
   private syst: SystemService,
   private reqsvc: RequestService,
   private route: ActivatedRoute,
   private router: Router
  ) { }
  
  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.requests = res;
      },
      error: (err) => console.error(err)
    });
  }



  review(): void {
    this.reqsvc.review(this.requests).subscribe({
      next: (res) => {
        console.debug("Review:");
        this.refresh();
      },
      error: (err) => console.error(err) 
    });
  }
  
  edit(reql: Requestline): void {
    this.router.navigateByUrl(`/requestlines/edit/${reql.id}`)
    }

    remove(reql: Requestline): void{
      this.reqsvc.remove(reql.id).subscribe({
        next: (res) => {
          console.debug("Requestline removed");
          this.refresh();
        },
        error: (err) => console.error(err)
      });
    }

    approve(): void {
      this.reqsvc.approve(this.requests).subscribe({
        next: (res) => {
          console.debug("Request approved.");
          this.refresh();
        },
        error: (err) => console.error(err)
      });
    }
    reject(): void{
     this.showVerifyButton = !this.showVerifyButton;
    }
      verifyReject(): void {
      this.showVerifyButton = false;
      this.reqsvc.reject(this.requests).subscribe({
        next: (res) => {
          console.debug("Request rejected");
          this.refresh();
        },
        error: (err) => console.error(err)
      });
    
    }
  ngOnInit(): void {
    this.refresh();
  }

}

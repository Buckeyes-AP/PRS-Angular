import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '../../system.service';
import { RequestlineService } from '../../requestline/requestline.service';
import { Requestline } from '../../requestline/requestline.class';
@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  requests!: Request;
  

  constructor(
    private req: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syst: SystemService,
    private reql: RequestlineService
  ) { }

  review(): void {
    this.req.review(this.requests).subscribe({
      next: (res) => {
        console.debug("Request reviewed");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }
  edit(rl: Requestline): void {
    this.router.navigateByUrl(`/requestlines/edit/${rl.id}`)
  }
  remove(rl: Requestline): void {
    this.reql.remove(rl.id).subscribe({
      next: (res) => {
        console.debug("Requestline removed");
        this.refresh()
      },
      error: (err) => console.error(err)
    });
  }

  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.req.get(id).subscribe({
      next: (res) => {
        console.debug("Requestline:", res);
        this.requests = res;
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

}

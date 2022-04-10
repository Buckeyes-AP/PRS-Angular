import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { SystemService } from '../../system.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';


@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestLines: Requestline = new Requestline();
  products!: Product[]


  constructor(
    private syst: SystemService,
    private reqlsvc: RequestlineService,
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
    
  ) { }

  save(): void {
    this.reqlsvc.create(this.requestLines).subscribe({
      next: (res) => {
        console.debug("Requestline added");
        this.router.navigateByUrl(`/request/line/${this.requestLines.requestId}`)
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.requestLines.requestId = +this.route.snapshot.params["id"];
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
  }

}

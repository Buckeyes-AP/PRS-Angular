import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { SystemService } from '../../system.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestLines!: Requestline;
  products!: Product[];

  constructor(
    private syst: SystemService,
    private reqlsvc: RequestlineService,
    private prodsv: ProductService,
    private route: ActivatedRoute,
    private router: Router 
  ) { }

    save(): void {
      this.requestLines.productId = +this.requestLines.productId;
      this.reqlsvc.change(this.requestLines).subscribe({
        next: (res) => {
          console.debug("Requestline added");
          this.router.navigateByUrl(`/request/line/${this.requestLines.requestId}`);
        },
        error: (err) => console.error(err)
      });
    }

  ngOnInit(): void {
    this.prodsv.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
    let id = +this.route.snapshot.params["id"];
    this.reqlsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Requestline:", res);
        this.requestLines = res;
      },
      error: (err) => console.error(err)
    });
  }

}

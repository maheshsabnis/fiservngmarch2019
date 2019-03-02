import { Component, OnInit } from "@angular/core";
import { ProductInfo, Products } from "./../../models/app.newproduct.models";
@Component({
  selector: "app-productchildreceiver-component",
  template: `
    <table class="table table-bordered table-striped">
      <tr>
        <td>PrdId</td>
        <td>PrdName</td>
        <td>CtaId</td>
      </tr>
      <tbody>
        <tr *ngFor="let p of prds">
          <td>{{ p.ProdId }}</td>
          <td>{{ p.ProdName }}</td>
          <td>{{ p.CatId }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class ProductChildReceiverComponent implements OnInit {
  prd: ProductInfo;
  prds = Products;
  CatId: number;

  constructor() {
    this.CatId = 0;
  }

  // subscibe to an event emitted by the service
  // this is one-time subscription
  ngOnInit(): void {}
}

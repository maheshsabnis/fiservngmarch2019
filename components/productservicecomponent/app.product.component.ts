import { Component, OnInit } from "@angular/core";
import { ProductData } from "./../../models/app.product.model";
import { Categories, Manufacturers } from "./../../models/app.constants";
import { ProductService } from "./../../services/app.product.service";
@Component({
  selector: "app-productservice-component",
  templateUrl: "./app.product.view.html"
})
export class ProductServiceComponent implements OnInit {
  // all members to be exposed to UI for binding
  // must be public else declare them as Private
  product: ProductData;
  categories = Categories;
  manufacturers = Manufacturers;
  products: Array<ProductData>;
  tableColumns: Array<string>;
  // injecting the service in the ctor
  constructor(private serv: ProductService) {
    this.product = new ProductData(0, "", "", 0, "", "", "");
    this.products = new Array<ProductData>();
    this.tableColumns = new Array<string>();
  }
  // invoked immediately after ctor
  // write all performance-cost logic in this method
  ngOnInit() {
    this.loadData();
    for (let c in this.product) {
      this.tableColumns.push(c);
    }
  }
  // the function will access the method from
  // service and subscribe to the response
  private loadData(): void {
    this.serv.getProducts().subscribe(
      response => {
        // if call is successful the  read ProductData
        this.products = response;
      },
      error => {
        // else error
        console.log(error.status);
      }
    );
  }

  clear(): void {
    this.product = new ProductData(0, "", "", 0, "", "", "");
  }
  save(): void {
    this.serv.postProduct(this.product).subscribe(
      response => {
        // if call is successful the  read ProductData
        this.product = response;
        this.products.push(this.product);
      },
      error => {
        // else error
        console.log(error.status);
      }
    );
  }
  getSelectedProduct(p: ProductData): void {
    this.product = Object.assign({}, p);
  }
}

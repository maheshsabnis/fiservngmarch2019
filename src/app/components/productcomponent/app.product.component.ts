import { Component, OnInit } from "@angular/core";
import { Product } from "./../../models/app.product.model";
import { Categories, Manufacturers } from "./../../models/app.constants";
import { ProductLogic } from "./app.product.logic";
@Component({
  selector: "app-product-component",
  templateUrl: "./app.product.view.html"
})
export class ProductComponent implements OnInit {
  // all members to be exposed to UI for binding
  // must be public else declare them as Private
  product: Product;
  categories = Categories;
  manufacturers = Manufacturers;
  private logic: ProductLogic;
  products: Array<Product>;
  tableColumns: Array<string>;
  constructor() {
    this.product = new Product(0, "", 0, "", "");
    this.logic = new ProductLogic();
    this.products = new Array<Product>();
    this.tableColumns = new Array<string>();
  }
  // invoked immediately after ctor
  // write all performance-cost logic in this method
  ngOnInit() {
    this.products = this.logic.getProducts();
    for (let c in this.product) {
      this.tableColumns.push(c);
    }
  }
  clear(): void {
    this.product = new Product(0, "", 0, "", "");
  }
  save(): void {
    this.products = this.logic.addProduct(this.product);
    alert(JSON.stringify(this.products));
  }
  getSelectedProduct(p: Product): void {
    this.product = Object.assign({}, p);
  }
}

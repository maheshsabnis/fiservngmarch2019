import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Product } from "./../../models/app.product.model";
import { Categories, Manufacturers } from "./../../models/app.constants";
import { ProductLogic } from "./app.product.logic";
import { OddNotAllowedValidator } from "./app.custom.validator";
@Component({
  selector: "app-productform-component",
  templateUrl: "./app.product.view.html"
})
export class ProductFormComponent implements OnInit {
  // all members to be exposed to UI for binding
  // must be public else declare them as Private
  product: Product;
  categories = Categories;
  manufacturers = Manufacturers;
  private logic: ProductLogic;
  products: Array<Product>;
  tableColumns: Array<string>;
  frmProduct: FormGroup;
  constructor() {
    this.product = new Product(0, "", 0, "", "");
    this.logic = new ProductLogic();
    this.products = new Array<Product>();
    this.tableColumns = new Array<string>();
    // link Model with FormControl
    this.frmProduct = new FormGroup({
      ProductId: new FormControl(
        this.product.ProductId,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(6),
          Validators.pattern("[0-9]*"),
          OddNotAllowedValidator.checkOddEven
        ])
      ),
      ProductName: new FormControl(this.product.ProductName),
      Price: new FormControl(this.product.Price),
      CategoryName: new FormControl(this.product.CategoryName),
      Manufacturer: new FormControl(this.product.Manufacturer)
    });
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
    // the value property of 'FromGroup'
    // will read value proeprty of individual FormControls
    this.product = this.frmProduct.value;
    this.products = this.logic.addProduct(this.product);
    alert(JSON.stringify(this.products));
  }
  getSelectedProduct(p: Product): void {
    this.product = Object.assign({}, p);
  }
}

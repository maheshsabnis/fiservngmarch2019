import { Product } from "./../../models/app.product.model";

export class ProductLogic {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>();
    this.products.push(new Product(101, "Laptop", 12000, "ECT", "AB Tech"));
    this.products.push(new Product(102, "Iron", 1200, "ECL", "MS Power"));
  }

  getProducts(): Array<Product> {
    return this.products;
  }
  addProduct(prd: Product): Array<Product> {
    this.products.push(prd);
    return this.products;
  }
}

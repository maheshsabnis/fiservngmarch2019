import { Component, OnInit } from "@angular/core";
import { Category, Categories } from "./../../models/app.category.model";
@Component({
  selector: "app-categorysendermaster-component",
  template: `
    <table class="table table-bordered table-striped">
      <tr>
        <td>CatId</td>
        <td>CategoryName</td>
      </tr>
      <tbody>
        <tr *ngFor="let c of cats" (click)="getSelectedCat(c)">
          <td>{{ c.CatId }}</td>
          <td>{{ c.CategoryName }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class CategorySenderMasterComponent implements OnInit {
  cat: Category;
  cats = Categories;
  constructor() {
    this.cat = new Category(0, "");
  }

  ngOnInit(): void {}

  getSelectedCat(c: Category): void {
    this.cat = c;
  }
}

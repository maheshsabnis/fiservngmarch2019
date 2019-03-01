import { Component } from "@angular/core";

@Component({
  selector: "app-simple-component",
  template: `
    <h2>The Simple Component!!!!!!</h2>
    <div>{{ name }}</div>
    <br />
    <input type="text" [value]="name" class="form-control" />
    <br />
    <a [href]="url">DEVC</a>
    <br />
    <input
      type="button"
      value="Click Me"
      class="btn btn-success"
      (click)="display()"
    />
    <br />
    <input type="text" class="form-control" [(ngModel)]="fullName" />
    <br />
    <input type="text" class="form-control" [(ngModel)]="fullName" />
    <br />
    <input type="text" class="form-control" [(ngModel)]="fullName" />
  `
})
export class SimpleComponent {
  name: string;
  url: string;
  fullName: string;
  constructor() {
    this.name = "Angular 7 MVC APP";
    this.url = "http://www.devcurry.com";
    this.fullName = "";
  }
  display(): void {
    this.name = "Angular 7 MVC Training";
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customdirective-component",
  template: `
    <table class="table table-bordered table-striped">
      <tr>
        <td><input type="radio" name="r" (click)="color = 'red'" /> Red</td>
        <td><input type="radio" name="r" (click)="color = 'blue'" /> Blue</td>
        <td>
          <input type="radio" name="r" (click)="color = 'yellow'" /> Yellow
        </td>
      </tr>
    </table>

    <hr />
    <div class="container" [setcolor]="color">
      The First Div
    </div>
    <br />
    <div class="container" [setcolor]="color">
      The Second Div
    </div>
    <br />
    <div class="container" [setcolor]="color">
      The Third Div
    </div>
  `
})
export class CustomDirectiveComponent implements OnInit {
  color: string;
  constructor() {
    this.color = "";
  }

  ngOnInit(): void {}
}

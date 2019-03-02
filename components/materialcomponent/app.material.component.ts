import { Component, OnInit } from "@angular/core";

const Employees = [
  { EmpNo: 101, EmpName: "A" },
  { EmpNo: 102, EmpName: "B" },
  { EmpNo: 103, EmpName: "C" },
  { EmpNo: 104, EmpName: "D" }
];

@Component({
  selector: "app-material-component",
  template: `
    <table
      class="table table-bordered table-striped"
      mat-table
      [dataSource]="employees"
    ></table>
  `
})
export class MaterialComponent implements OnInit {
  employees = Employees;
  constructor() {}

  ngOnInit(): void {}
}

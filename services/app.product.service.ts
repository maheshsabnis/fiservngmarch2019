import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProductData } from "./../models/app.product.model";

@Injectable()
export class ProductService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://apiapptrainingservice.azurewebsites.net/api/Products";
  }

  getProducts(): Observable<ProductData[]> {
    let resp: Observable<ProductData[]> = null;
    resp = this.http.get<ProductData[]>(this.url);
    return resp;
  }
  postProduct(prd: ProductData): Observable<ProductData> {
    let resp: Observable<ProductData> = null;
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resp = this.http.post<ProductData>(this.url, prd, options);
    return resp;
  }
  putProduct(prd: ProductData): Observable<ProductData> {
    let resp: Observable<ProductData> = null;
    let options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    resp = this.http.put<ProductData>(
      `${this.url}/${prd.ProductRowId}`,
      prd,
      options
    );
    return resp;
  }
}

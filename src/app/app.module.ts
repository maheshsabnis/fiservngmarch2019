// 1. Standard Imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
// 2. Import Components, Custom Directives and Pipes
import { AppComponent } from "./app.component";
import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { ProductComponent } from "./components/productcomponent/app.product.component";
// 3. Angular Services

@NgModule({
  declarations: [AppComponent, SimpleComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule {}

// 1. Standard Imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
// 2. Import Components, Custom Directives and Pipes
import { AppComponent } from "./app.component";
import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { ProductServiceComponent } from "./components/productservicecomponent/app.product.component";
import { ProductFormComponent } from "./components/productformcomponent/app.product.component";
import { ColorDirective } from "./directives/app.color.directive";
import { CustomDirectiveComponent } from "./components/customdirectivecomponent/app.customdirective.component";

// 3. Angular Services
import { ProductService } from "./services/app.product.service";
@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ProductComponent,
    ProductServiceComponent,
    ProductFormComponent,
    ColorDirective,
    CustomDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [CustomDirectiveComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';

import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { UserDetailComponent } from './prs/user/user-detail/user-detail.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserEditComponent } from './prs/user/user-edit/user-edit.component';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './prs/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './prs/vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductDetailComponent } from './prs/product/product-detail/product-detail.component';
import { ProductEditComponent } from './prs/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { RequestLinesComponent } from './prs/request/request-lines/request-lines.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestEditComponent } from './prs/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './prs/request/request-detail/request-detail.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestReviewListComponent } from './prs/request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './prs/request/request-review-item/request-review-item.component';
import { RequestlineEditComponent } from './prs/requestline/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './prs/requestline/requestline-create/requestline-create.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    E404Component,
    HomeComponent,
    MenuComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    UserLoginComponent,
    RequestLinesComponent,
    RequestListComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestReviewListComponent,
    RequestReviewItemComponent,
    RequestlineEditComponent,
    RequestlineCreateComponent
   
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

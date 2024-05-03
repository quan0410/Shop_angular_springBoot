import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OrderComponent} from "./order/order.component";
import {OrderConfirmComponent} from "./order-confirm/order-confirm.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    OrderComponent,
    OrderConfirmComponent,
    LoginComponent,
    RegisterComponent,
    DetailProductComponent
  ],
  template: `
    <!--    <app-home></app-home>-->
    <!--    <app-order></app-order>-->
    <!--    <app-order-confirm></app-order-confirm>-->
    <!--    <app-login></app-login>-->
    <!--    <app-register></app-register>-->
    <app-detail-product></app-detail-product>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}

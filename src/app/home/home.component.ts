import { Component } from '@angular/core';
import productsData from '../products.json';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products = productsData.products;

}

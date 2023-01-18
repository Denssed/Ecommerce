import { Component } from '@angular/core';
import { Router } from '@angular/router';
import productsData from '../products.json'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  products = productsData.products;

  openProfile(){
    this.router.navigate(['/profile']);
  }

}

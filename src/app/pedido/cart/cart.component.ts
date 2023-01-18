import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [] 
  displayedColumns: string[] = ['nombre', 'marca', 'tipo', 'costo', 'imagen', 'action'];
  transactions: any[]=[];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.costo).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('products') || '[]');
    this.transactions= this.cart
    console.log(this.cart)
  }

}

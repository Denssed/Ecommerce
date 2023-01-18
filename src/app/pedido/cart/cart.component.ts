import { Component } from '@angular/core';

interface Transaction {
  nombre: string;
  marca: string;
  cost: number;
 
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  displayedColumns: string[] = ['nombre', 'marca', 'cost'];
  transactions: Transaction[] = [
    {nombre: 'Beach ball', cost: 4, marca:'aaa'},
    {nombre: 'Towel', cost: 5, marca:'aaa'},
    {nombre: 'Frisbee', cost: 2, marca:'aaa'},
    {nombre: 'Sunscreen', cost: 4, marca:'aaa'},
    {nombre: 'Cooler', cost: 25, marca:'aaa'},
    {nombre: 'Swim suit', cost: 15, marca:'aaa'},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

}

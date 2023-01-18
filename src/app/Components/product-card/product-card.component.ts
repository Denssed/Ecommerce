import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { CabeceraComponent } from 'src/app/cabecera/cabecera.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product : any={};



  public addToCart(product:any) {
   let StorageActual = JSON.parse(localStorage.getItem('products') || '[]');
   let storage = localStorage.setItem('products', JSON.stringify([...StorageActual,product]))
   console.log(JSON.parse(localStorage.getItem('products') || '[]'));
   
  }

  public addPedido() {
    CabeceraComponent.cn += 1; 
  }

}
interface GlobalDocumentProps {
  num: BigInteger;
}

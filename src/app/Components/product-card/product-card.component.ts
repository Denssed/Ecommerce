import { Input } from '@angular/core';
import { Component } from '@angular/core';
import angular from 'angular';
import { CabeceraComponent } from 'src/app/cabecera/cabecera.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() nombre = '';
  @Input() marca = '';
  @Input() tipo = '';
  @Input() img = '';


  public addToCart() {
    CabeceraComponent.cn += 1; 
  }

}
interface GlobalDocumentProps {
  num: BigInteger;
}

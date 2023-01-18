import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MaterialModule } from './material/material.module';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { ProductosComponent } from './productos/productos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { CartComponent } from './pedido/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BannerComponent,
    SliderComponent,
    ProductosComponent,
    HomeComponent,
    PiePaginaComponent,
    ProductCardComponent,
    CartComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

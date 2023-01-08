import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponent } from './cabecera/cabecera/cabecera.component';
import { MaterialModule } from './material/material/material.module';
import { BannerComponent } from './banner/banner/banner.component';
import { SliderComponent } from './slider/slider/slider.component';
import { ProductosComponent } from './productos/productos/productos.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BannerMedioComponent } from './banner-medio/banner-medio/banner-medio.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina/pie-pagina.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BannerComponent,
    SliderComponent,
    ProductosComponent,
    BannerMedioComponent,
    PiePaginaComponent
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

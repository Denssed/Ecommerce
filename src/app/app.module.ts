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
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfileComponent } from './profile/profile.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';




@NgModule({
  declarations: [
    ProfileComponent,
    AppComponent,
    CabeceraComponent,
    BannerComponent,
    SliderComponent,
    ProductosComponent,
    HomeComponent,
    PiePaginaComponent,
    ProductCardComponent,
    LoginComponent,
  ],
  imports: [
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
  ]
})
export class AppModule { }

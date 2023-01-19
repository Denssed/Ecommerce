import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddProductsComponent } from '../Components/add-products/add-products.component';
import { ModifyProductsComponent } from '../Components/modify-products/modify-products.component';
import productsData from '../products.json'

interface productInterface{
  nombre: string,
  marca: string,
  tipo: string,
  costo: string,
  imagen: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  products:any = productsData.products;

  addproduct:any;
  nav: any;

  dataSource: any = [];
  displayedColumns: string[] = ['nombre', 'marca','tipo','costo', 'acciones']

  constructor(private router: Router, private dialog:MatDialog) { 

    this.nav = this.router.getCurrentNavigation();
    this.addproduct = this.nav.extras.state;
    // console.log(this.nav, 'addProduct');
    // console.log(this.addproduct, 'addProduct');
    
    // console.log(this.addproduct);
    // if (this.addproduct != null)
    // {      
    //   const newData = this.dataSource.map((product: any) => { 
    //     console.log(product, 'cliente');
    //     if(product.nombre === this.addproduct.product.queryParams.nombre) product = this.addproduct.product.queryParams
    //     console.log(product);
    //     return product
    //   })
    //   this.dataSource = newData;
    // } else {
      // let store = JSON.parse(localStorage['store']) as const
      // JSON.stringify(...store, this.addproduct.product.queryParams)
      // localStorage.setItem('store', JSON.stringify(...store, this.addproduct.product.queryParams))
      // if (this.addproduct?.product?.queryParams) this.addproduct.push(this.addproduct.product.queryParams);
    // }
    

  }
  
  ngOnInit(): void {
    // console.log(productsData.products,'products')
    // console.log(productsData)
    if (localStorage.getItem('store') === null) {
      localStorage.setItem('store', JSON.stringify(productsData.products))
    }
    let store = JSON.parse(localStorage['store'])
    // console.log(store);
    this.dataSource = new MatTableDataSource<productInterface>(store as productInterface[]);
    // console.log(this.dataSource);
  }

  openDialogAgregar(){
    this.dialog.open(AddProductsComponent, {
      width: '50%',
    })
  }

  openDialogModificar(product: any){
    this.dialog.open(ModifyProductsComponent, {
      width: '50%',
      data : {
        nombre: product.nombre,      
        marca: product.marca,
        tipo: product.tipo,
        costo: product.costo
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

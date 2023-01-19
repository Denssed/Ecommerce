import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  constructor(private router: Router, private dialogRef: MatDialogRef<AddProductsComponent>) { }

  ngOnInit(): void {
  }

  product = new FormGroup({
    nombre: new FormControl('',Validators.required),
    marca: new FormControl('',Validators.required),
    tipo: new FormControl('', Validators.required),
    costo: new FormControl('', Validators.required)
  })

  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        nombre: this.product.value.nombre,
        marca: this.product.value.marca,
        tipo: this.product.value.tipo,
        costo: this.product.value.costo
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    // console.log(this.product.value)

    this.dialogRef.close(); 
    this.redirectTo('/dashboard', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { product: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}

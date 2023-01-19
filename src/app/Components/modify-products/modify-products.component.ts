import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-modify-products',
  templateUrl: './modify-products.component.html',
  styleUrls: ['./modify-products.component.css']
})
export class ModifyProductsComponent {
  constructor(
    private router: Router, 
    private dialogRef: MatDialogRef<ModifyProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      nombre: string,      
      marca: string,
      tipo: string,
      costo: string
    }) { }

  ngOnInit(): void {
  }

  product = new FormGroup({
    nombre: new FormControl(this.data.nombre, Validators.required),
    marca: new FormControl(this.data.marca, Validators.required),
    tipo: new FormControl(this.data.tipo, Validators.required),
    costo: new FormControl(this.data.costo, Validators.required)
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

    this.dialogRef.close(); 
    this.redirectTo('/dashboard', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
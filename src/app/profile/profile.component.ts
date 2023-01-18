import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import usersData from '../users.json'
import usersEData from '../usersE.json'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
  })

export class ProfileComponent {  
  constructor(private router: Router, private dialogRef: MatDialogRef<ProfileComponent>, private location:Location) { }
  
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  users = usersData.users;
  usersE = usersEData.usersE;

  datoNuevo = new FormGroup({
    email: new FormControl('', Validators.required),
    usuario: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required)
  })

  onSubmit(){
    let objToSend: NavigationExtras = {
      queryParams: {
        email: this.datoNuevo.value.usuario,
        usuario: this.datoNuevo.value.usuario,
        apellido: this.datoNuevo.value.apellido,
        password: this.datoNuevo.value.password,
        cedula: this.datoNuevo.value.cedula,
        edad: this.datoNuevo.value.edad
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/home', objToSend);
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datoNuevo: objToSend}}));
  }

  cancelar(){
    this.dialogRef.close(); 
  }

  goBack() :void{
    this.location.back();
  }

}
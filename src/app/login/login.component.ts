import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router, private dialogoRef: MatDialogRef<LoginComponent>) {}

  alert: boolean = false;

  usuarioLogin = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })
  
  onSubmit(){

    if (this.usuarioLogin.value.email=="jorge@gmail.com" && this.usuarioLogin.value.password=="123")
    {
      this.router.navigate(['/home']);
      this.dialogoRef.close();
    }
    if (this.usuarioLogin.value.email=="geraldine@gmail.com" && this.usuarioLogin.value.password=="123")
    {
      this.router.navigate(['/home']);
      this.dialogoRef.close();
    }
    else
    {
      this.alert = true;
      setTimeout(() => this.alert=false, 4000);
    }

    if (this.usuarioLogin.value.email=="jeremy@gmail.com" && this.usuarioLogin.value.password=="198")
    {
      this.router.navigate(['/dashboard']);
      this.dialogoRef.close();
    }
    if (this.usuarioLogin.value.email=="carlos@gmail.com" && this.usuarioLogin.value.password=="198")
    {
      this.router.navigate(['/dashboard']);
      this.dialogoRef.close();
    }
    else
    {
      this.alert = true;
      setTimeout(() => this.alert=false, 4000);
    }
  }
}

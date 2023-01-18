import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import usersData from '../users.json'
import usersEData from '../usersE.json'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router, private dialogoRef: MatDialogRef<LoginComponent>) {}

  alert: boolean = false;

  users = usersData.users;
  usersE = usersEData.usersE;
  
  usuarioLogin = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  
  onSubmit(): void{
    if (this.usuarioLogin.value.email && this.usuarioLogin.value.password)
    {
      this.router.navigate(['/home']);
      this.dialogoRef.close();
    }
    else
    {
      this.router.navigate(['/dashboard']);
      this.dialogoRef.close();
    }
  }

  ngOnInit(): void{
  }
}

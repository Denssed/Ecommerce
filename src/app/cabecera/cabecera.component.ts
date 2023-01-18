import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  usuario: string = ""

  constructor(private router: Router, private dialog:MatDialog) {}

  cerrarSesion(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }
  
}

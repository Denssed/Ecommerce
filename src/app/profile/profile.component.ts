import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
  })

export class ProfileComponent {  
  cedula?: String;
  nombre?: String;
  apellido?: String;
  location?: String;

  constructor(private enrutador: Router) {}

  personasRegistradas: Object[] = [];

  registrarPersona(formulario: NgForm) {
    const cedula: String = formulario.value.cedula.trim();
    const nombre: String = formulario.value.nombre.trim();
    const apellido: String = formulario.value.apellido.trim();
    const location: String = formulario.value.location.trim();

    if (
      cedula !== '' &&
      nombre !== '' &&
      apellido !== '' &&
      location !== ''
    ) {
      const persona: Object = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        contrasena: location,
      };
      this.personasRegistradas.push(persona);
      console.table(this.personasRegistradas);
      alert(
        '¡Sus datos fueron cambiados!' +
          this.personasRegistradas.length
      );
      this.limpiarCampos();
    } else {
      alert('¡Complete Todos los Campos!');
    }
  }

  limpiarCampos() {
    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.location = '';
  }

  pantallaInicio() {
    this.enrutador.navigate(['/']);
  }
}
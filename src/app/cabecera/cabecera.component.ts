import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
    static cn = 0;
    get staticCount() {
      return CabeceraComponent.cn;
    }
}

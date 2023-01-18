import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'reda';
  nombreUpper: string = 'REDA';
  nombreCompleto: string = 'mohamed reda';

  fecha: Date = new Date();
}

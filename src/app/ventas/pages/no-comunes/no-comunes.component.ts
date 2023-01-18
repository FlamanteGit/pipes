import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  cliente1 = {
    nombre: 'Reda',
    genero: 'masculino',
  };

  cliente2 = {
    nombre: 'Belén',
    genero: 'femenino',
  };

  cliente = this.cliente1;

  nombre: string = 'Reda';
  genero: string = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientes: string[] = ['Pepe', 'Juan', 'Pedro', 'Maria'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando ',
  };

  cambiarCliente() {
    this.cliente =
      this.cliente === this.cliente1 ? this.cliente2 : this.cliente1;
  }

  borrarCliente() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'Reda',
    edad: 22,
    direccion: 'Madrid, España',
  };

  asIs() {
    return 0;
  }

  heroes = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'aquaman',
      vuela: false
    }
  ]

  miObservable = interval(100) 
}

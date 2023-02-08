import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Francisco',
      apellido: 'gusman',
      email: 'francisco.graya26@gmail.com',
      createAt: '2017-12-11',
    },
    {
      id: 2,
      nombre: 'Armando',
      apellido: 'gusman',
      email: 'francisco.graya26@gmail.com',
      createAt: '2017-12-11',
    },
    {
      id: 3,
      nombre: 'alfonzo',
      apellido: 'loera',
      email: 'francisco.graya26@gmail.com',
      createAt: '2017-12-11',
    },
  ];

  constructor() {}
  ngOnInit() {
    console.log('En este instante el componente ha cargado');
  }
}

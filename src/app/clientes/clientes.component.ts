import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { CLIENTES } from './clientes.json';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
    clientes => this.clientes = clientes
    );
    console.log('En este instante el componente ha cargado');
  }
}

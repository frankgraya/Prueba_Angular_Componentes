import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {

  listaCurso: String [ ] = ['TypeScript', 'javaScript', 'JavaSE', 'C#', 'PHP','Rust'];

  habilitar: boolean = true;

  constructor(){

  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// declaracion de varibles es recomendable poner tipo de variable
//estos se visualizan en html como  {{curso}}
  title = 'Bienvenido angular';
  curso: String = 'curso angular';
  profesor: String ='pedro parammo';
}

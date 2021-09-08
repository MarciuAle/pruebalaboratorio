import { Component } from '@angular/core';
import { Usuarios } from './clases/usuarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  myUsuario:Usuarios;

  constructor() {
    this.myUsuario=new Usuarios();
  }
  saludar(){console.log("Hola!")};

}

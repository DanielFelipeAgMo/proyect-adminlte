import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyect-adminlte';

  constructor( private usuariosService:UsuariosService){
    this.usuariosService.getUsuarios().subscribe(resp=>{
      console.log(resp)
    })
  }
}

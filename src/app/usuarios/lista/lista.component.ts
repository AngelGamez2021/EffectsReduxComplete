import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private UserService: UsuarioService ) { }

  ngOnInit(): void {
    this.leerUsuario();
  }


//servicio para leer el usuario, luego va al init
leerUsuario(){
  this.UserService.getUsers().subscribe(data => console.log(data)
    )

}


}

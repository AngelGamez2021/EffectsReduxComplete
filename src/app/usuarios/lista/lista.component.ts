import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/interface/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private store: Store) { }
  // constructor(private UserService: UsuarioService) { } servocops...


  ngOnInit(): void {
    //esto es con servicios
    // this.leerUsuario();

//     this.store.select('usuarios').subscribe(( users ) => {

// console.log(users);


//     });

    this.store.dispatch(cargarUsuarios())
  }


  //servicio para leer el usuario, luego va al init
  // leerUsuario() {
  //   this.UserService.getUsers().subscribe(users => {
  //     console.log(users);
  //     this.usuarios = users;
  //  });
  // }







}

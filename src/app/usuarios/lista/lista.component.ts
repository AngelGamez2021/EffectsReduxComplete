import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/interface/usuario.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>) { }
  // constructor(private UserService: UsuarioService) { } servocops...


  ngOnInit(): void {
    //esto es con servicios
    // this.leerUsuario();

    this.leerUsuarios();
    this.store.dispatch(cargarUsuarios())
  }

  //leer el store
  leerUsuarios() {
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users,
      this.loading = loading,
      this.error = error
    
    });
  }

  //servicio para leer el usuario, luego va al init
  // leerUsuario() {
  //   this.UserService.getUsers().subscribe(users => {
  //     console.log(users);
  //     this.usuarios = users;
  //  });
  // }







}

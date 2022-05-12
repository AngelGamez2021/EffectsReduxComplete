// // npm install @ngrx/effects --save
// //tambien hay que crear un index

//tienes que usar antes de esto, el ActivatedRoute en el ts del usuario.

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of, tap } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuarioActions from "../actions/usuario.actions";





@Injectable()


export class UsuarioEffects {


    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) { }

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuarioActions.cargarUsuario),
            concatMap((action) => this.usuariosService.getUserById(action.id)
                .pipe(
                    // tap(data => console.log('getUsers effects', data))...esto sirve para imprimir aca en el effects
                    map(user => usuarioActions.cargarUsuarioSuccess({ usuario: user })),
                    catchError(error => of(usuarioActions.cargarUsuarioError({ payload: error })))
                ))));
}


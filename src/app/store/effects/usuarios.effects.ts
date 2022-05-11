// npm install @ngrx/effects --save
//tambien hay que crear un index

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, of, tap } from "rxjs";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from "../actions/usuarios.actions";





@Injectable()


export class UsuariosEffects {


    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) { }

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType(usuariosActions.cargarUsuarios),
            concatMap(() => this.usuariosService.getUsers()
                .pipe(
                    // tap(data => console.log('getUsers effects', data))...esto sirve para imprimir aca en el effects
                    map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),

                )
            )
        )


    );


}






// readUser$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(UserActions.readUser),
//   concatMap(() =>
//     this.userService.getUsers().pipe(
//       map(({ dataUsers }) => UserActions.readUserSuccess({ users: dataUsers })),
//       catchError((error) => of(UserActions.readUserFailure({ error })))
//     )
//   )
// )
// );
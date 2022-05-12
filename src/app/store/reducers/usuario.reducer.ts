import { Action, createReducer, on, State } from "@ngrx/store";
import { Usuario } from "src/app/interface/usuario.interface";
import {cargarUsuarioSuccess, cargarUsuarioError, cargarUsuario} from '../actions'

//aca dan la opcion de cambiar añadir ese null al Usuario.. tambien se da la opcion de ir al tsconfig.json y en compilerOptions
//añadir "strictNullChecks": false y listo, se le quita el null que se habia añadido
export interface UsuarioState{
    id      : string,
    user    : Usuario | null,
    loaded  : boolean,
    loading : boolean,
    error   : any
}

export const usuarioInitialState: UsuarioState = {
    id      : '',
    user    :  null,
    loaded  : false,
    loading : false,
    error   : null
}


const _usuarioReducer = createReducer(usuarioInitialState,
    
    on(cargarUsuario, (state, {id}) => ({
        ...state, 
        loading: true,
        id: id
    })),

           on(cargarUsuarioSuccess,(state, {usuario}) =>({
        ...state,
        loading: false,
        loaded: true,
        user: {...usuario}
    })),

    on(cargarUsuarioError,(state, {payload}) =>({
        ...state,
        loading: false,
        loaded: true,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
        } 
       })),
    
    
    
    )






export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}
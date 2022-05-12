import { Action, createReducer, on, State } from "@ngrx/store";
import { Usuario } from "src/app/interface/usuario.interface";
import {cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError} from '../actions'


export interface UsuariosState{
    users: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usuariosInitialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}


const _usuariosReducer = createReducer(usuariosInitialState,
    
    on(cargarUsuarios, state => ({...state, loading: true})),

       
    on(cargarUsuariosSuccess,(state, {usuarios}) =>({
        ...state,
        loading: false,
        loaded: true,
        users: [...usuarios]
    })),


    on(cargarUsuariosError,(state, {payload}) =>({
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






export function usuariosReducer(state: UsuariosState | undefined, action: Action) {
    return _usuariosReducer(state, action);
}
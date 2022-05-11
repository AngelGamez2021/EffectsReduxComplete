import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/interface/usuario.interface";


// despues pasamos a la creacion del index, donde exportaremos todas las acciones creadas
//luego de crear las acciones y los reduces, creamos un app.reducers, dentro del store



export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
    '[Usuarios] Cargar Usuarios Success',
    props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction(
    '[Usuarios] Cargar Usuarios Error',
    props<{ payload: any }>()
)

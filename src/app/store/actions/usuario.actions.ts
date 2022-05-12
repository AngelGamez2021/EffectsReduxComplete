import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/interface/usuario.interface";


// despues pasamos a la creacion del index, donde exportaremos todas las acciones creadas
//luego de crear las acciones y los reduces, creamos un app.reducers, dentro del store



export const cargarUsuario = createAction(
    '[Usuario] Cargar Usuario',
    props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
    '[Usuario] Cargar Usuario Success',
    props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
    '[Usuario] Cargar Usuario Error',
    props<{ payload: any }>()
)

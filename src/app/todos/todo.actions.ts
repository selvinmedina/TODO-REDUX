import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea todo',
  props<{ texto: string }>()
);

export const toggle = createAction('[TODO] Toggle', props<{ id: number }>());

export const editar = createAction(
  '[TODO] Editar',
  props<{ id: number; texto: string }>()
);

export const borrar = createAction('[TODO] Borrar', props<{ id: number }>());

export const completado = createAction(
  '[TODO] Completar',
  props<{ completado: boolean }>()
);

import { createAction, props } from '@ngrx/store';

export type FiltrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
  '[Filtro] Set',
  props<{ filtro: FiltrosValidos }>()
);

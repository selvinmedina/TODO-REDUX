import { ActionReducerMap } from '@ngrx/store';
import { FiltrosValidos } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
  todos: Todo[];
  filtros: FiltrosValidos;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtros: filtroReducer,
};

import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';
import { TodoModule } from './todo.module';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('uni'),
  new Todo('trabajo'),
  new Todo('escudos'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}

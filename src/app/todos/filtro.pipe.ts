import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { FiltrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtrarTodo',
})
export class FiltroPipe implements PipeTransform {
  constructor(private store: Store<AppState>) {}

  transform(todos: Todo[], filtro: FiltrosValidos): unknown {
    switch (filtro) {
      case 'completados':
        return todos.filter((filtro) => filtro.completado);
      case 'pendientes':
        return todos.filter((filtro) => !filtro.completado);
      default:
        return todos;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { filtroReducer } from 'src/app/filtro/filtro.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.FiltrosValidos;
  filtros: actions.FiltrosValidos[];

  pendientes: number;

  constructor(private store: Store<AppState>) {
    this.filtros = ['todos', 'completados', 'pendientes'];
    this.pendientes = 0;
  }

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.pendientes = state.todos.filter((todo) => !todo.completado).length;
      this.filtroActual = state.filtros;
    });
  }

  cambiarFiltro(filtro: actions.FiltrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }
}

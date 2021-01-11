import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actionsFiltros from 'src/app/filtro/filtro.actions';
import * as actionsTodos from 'src/app/todos/todo.actions';
import { filtroReducer } from 'src/app/filtro/filtro.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actionsFiltros.FiltrosValidos;
  filtros: actionsFiltros.FiltrosValidos[];

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

  cambiarFiltro(filtro: actionsFiltros.FiltrosValidos) {
    this.store.dispatch(actionsFiltros.setFiltro({ filtro }));
  }

  limpiarComletados(){
    this.store.dispatch(actionsTodos.limpiarCompletados())
  }
}

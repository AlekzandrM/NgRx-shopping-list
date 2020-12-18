import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AddItemAction, RemoveItemAction, LoadShoppingAction } from './store/actions/shopping.actions';

// ****************** Для запуска локального сервера json ************************
// запустить в терминале: json-server db.json

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  shoppingItems: Observable<ShoppingItem[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(LoadShoppingAction());
    this.shoppingItems = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);
  }

  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: '' };
  }

  removeItem(deleteId: string) {
    this.store.dispatch(RemoveItemAction({ itemId: deleteId }));
  }
}

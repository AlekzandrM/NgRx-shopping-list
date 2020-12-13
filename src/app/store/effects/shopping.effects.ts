import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError } from 'rxjs/operators';

import { ShoppingActionTypes, LoadShoppingSuccessAction, LoadShoppingFailureAction, AddItemSuccessAction, AddItemFailureAction, RemoveItemSuccessAction, RemoveItemFailureAction } from '../actions/shopping.actions'
import {Observable, of} from 'rxjs';
import { ShoppingService } from 'src/app/shopping.service';
import {Action} from '@ngrx/store';
import {ShoppingItem} from '../models/shopping-item.model';

@Injectable()
export class ShoppingEffects {
  public loadShoppingEffect$: Observable<Action> = createEffect(() =>
    this.actions$
      .pipe(
        ofType(ShoppingActionTypes.LOAD_SHOPPING),
        mergeMap(
          () => this.shoppingService.getShoppingItems()
            .pipe(
                map((shoppingItems) => LoadShoppingSuccessAction({ shoppingItems }),
                catchError((error) => of(LoadShoppingFailureAction(error)))
            )
        ),
      )
    )
  );
  public addShoppingItemEffect$: Observable<Action> = createEffect(() =>
    this.actions$
      .pipe(
        ofType(ShoppingActionTypes.ADD_ITEM),
        mergeMap(
          (shoppingItem) => this.shoppingService.addShoppingItem(shoppingItem)
            .pipe(
              map((shoppingItem: ShoppingItem) => AddItemSuccessAction({ id: shoppingItem.id, name: shoppingItem.name }),
                catchError((error) => of(AddItemFailureAction(error)))
              )
            ),
        )
      )
  );
  public deleteShoppingItemEffect$: Observable<Action> = createEffect(() =>
    this.actions$
      .pipe(
        ofType(ShoppingActionTypes.REMOVE_ITEM),
        mergeMap(
          ( { itemId } ) => this.shoppingService.deleteShoppingItem(itemId)
            .pipe(
              map(() => RemoveItemSuccessAction({ itemId }),
                catchError((error) => of(RemoveItemFailureAction(error)))
              )
            ),
        )
      )
  );

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) { }
}

import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';
import {ShoppingItemId} from '../../shopping.interface';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  REMOVE_ITEM = '[SHOPPING] Remove Item',
  REMOVE_ITEM_SUCCESS = '[SHOPPING] Remove Item Success',
  REMOVE_ITEM_FAILURE = '[SHOPPING] Remove Item Failure'
}

export const LoadShoppingAction = createAction(
  ShoppingActionTypes.LOAD_SHOPPING,
)
export const LoadShoppingSuccessAction = createAction(
  ShoppingActionTypes.LOAD_SHOPPING_SUCCESS,
  props<any>()
)
export const LoadShoppingFailureAction = createAction(
  ShoppingActionTypes.LOAD_SHOPPING_FAILURE,
  props<Error>()
)
export const AddItemAction = createAction(
  ShoppingActionTypes.ADD_ITEM,
  props<ShoppingItem>()
)
export const AddItemSuccessAction = createAction(
  ShoppingActionTypes.ADD_ITEM_SUCCESS,
  props<ShoppingItem>()
)
export const AddItemFailureAction = createAction(
  ShoppingActionTypes.ADD_ITEM_FAILURE,
  props<Error>()
)
export const RemoveItemAction = createAction(
  ShoppingActionTypes.REMOVE_ITEM,
  props<ShoppingItemId>()
)
export const RemoveItemSuccessAction = createAction(
  ShoppingActionTypes.REMOVE_ITEM_SUCCESS,
  props<ShoppingItemId>()
)
export const RemoveItemFailureAction = createAction(
  ShoppingActionTypes.REMOVE_ITEM_FAILURE,
  props<Error>()
)

import {ShoppingItem} from '../models/shopping-item.model';
import {
  AddItemAction, AddItemFailureAction, AddItemSuccessAction,
  LoadShoppingAction, LoadShoppingFailureAction,
  LoadShoppingSuccessAction, RemoveItemAction, RemoveItemFailureAction, RemoveItemSuccessAction,
} from '../actions/shopping.actions';
import {Action, createReducer, on} from '@ngrx/store';

export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean,
  error: Error
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
}

const ShoppingReducerImplicit = createReducer(
  initialState,
  on(LoadShoppingAction, ((state) => ({...state, loading: true}))),
  on(LoadShoppingSuccessAction, (state, { shoppingItems }) => ({...state, list: shoppingItems, loading: false})),
  on(LoadShoppingFailureAction, ((state, err) => ({...state, error: err, loading: false}))),
  on(AddItemAction, ((state,shoppingItem) => ({...state, loading: true}))),
  on(AddItemSuccessAction, ((state, {id, name}) => ({...state, list: [...state.list, {id, name}], loading: false}))),
  on(AddItemFailureAction, ((state, err) => ({...state, error: err, loading: false}))),
  on(RemoveItemAction, ( state => ({...state, loading: true}))),
  on(RemoveItemSuccessAction, ((state, { itemId}) => ({...state, list: state.list.filter(item => item.id !== itemId), loading: false}))),
  on(RemoveItemFailureAction, ((state, err) => ({...state, error: err, loading: false})))
)

export function ShoppingReducer(state: any, action: Action) {
  return ShoppingReducerImplicit(state, action);
}


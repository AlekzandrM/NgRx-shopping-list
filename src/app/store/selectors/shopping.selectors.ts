import {createSelector} from '@ngrx/store';
import {ShoppingState} from '../reducers/shopping.reducer';

export const selectShoppingList = (state: ShoppingState) => state.list;

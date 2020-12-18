import {createSelector} from '@ngrx/store';
import {ShoppingState} from '../reducers/shopping.reducer';

// ********* В данном приложении не используется
export const selectShoppingList = (state: ShoppingState) => state.list;

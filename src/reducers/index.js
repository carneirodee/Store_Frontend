
import { combineReducers } from 'redux';
import {infoReducer} from './info.reducer';
import {productReducer} from './products.reducer';
import {cartReducer} from './cart.reducer';

export default combineReducers({
	infoReducer,
	productReducer,
	cartReducer
  });
  
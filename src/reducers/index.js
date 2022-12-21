
import { combineReducers } from 'redux';
import { productReducer } from './products.reducer';
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';
import { authReducer } from './auth.reducer';

export default combineReducers({
	productReducer,
	cartReducer,
	userReducer,
	authReducer
});

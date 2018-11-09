import { createStore, combineReducers } from 'redux';
import cartItems from '../reducers/cart-items';
import storeItems from '../reducers/stores-items';

const rootReducers = combineReducers({
    cart: cartItems,
    store: storeItems
});



export default store = createStore(rootReducers)
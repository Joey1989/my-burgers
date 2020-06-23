import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseInit = (state) => {
    return updatedObject(state, {purchased: false});
};

const purchasedBurgerStart = (state) => {
	return updatedObject(state, {loading: true});
}

const purchasedBurgerSuccess = (state, action) => {
	const newOrder = updatedObject(action.orderData, {
		id: action.orderId
	});
	return updatedObject(state, {
		laoding: false,
		orders: state.orders.concat(newOrder),
		purchased: true,
	});
}

const purchasedBurgerFail = (state, action) => {
	return updatedObject(state, {loading: action.loading});
}

const fetchBurgerStart = (state) => {
    return updatedObject(state, {loading: true});
}

const fetchOrderSuccess = (state, action) => {
    return updatedObject(state, {
    	orders: action.orders,
    	loading: false,
    });
}

const fetchBurgerFail = (state) => {
    return updatedObject(state, {loading: false});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
    	case actionTypes.PURCHASE_INIT:
	    	return purchaseInit(state);
    	case actionTypes.PURCAHSE_BURGER_START:
	    	return purchasedBurgerStart(state);
    	case actionTypes.PURCAHSE_BURGER_SUCCESS:
    	    return purchasedBurgerSuccess(state, action);
    	case actionTypes.PURCAHSE_BURGER_FAIL:
	    	return purchasedBurgerFail(state, action);
	    case actionTypes.FETCH_ORDERS_START:
	        return fetchBurgerStart(state);
	    case actionTypes.FETCH_ORDERS_SUCCESS:
		    return fetchOrderSuccess(state, action);
	    case actionTypes.FETCH_ORDERS_FAIL:
	    	return fetchBurgerFail(state);
	    default:
	        return state;
    }
};

export default reducer;
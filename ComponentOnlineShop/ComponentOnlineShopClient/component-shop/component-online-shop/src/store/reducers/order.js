import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    error: false
};
//GET
const fetchOrdersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchOrdersSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

const fetchOrdersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};
//DELETE 

const deleteOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const deleteOrderSuccess = (state, action) => {
    return updateObject(state, {
      orders: state.orders.filter(order => order.id !== action.orderId),
      loading: false
    });
  };
  
  const deleteOrderFail = (state, action) => {
    return updateObject(state, { loading: false });
  };

  //POST

  const createOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const createOrderSuccess = (state, action) => {
    return updateObject(state, {
      orders: [...state.orders, action.order],
      loading: false
    });
  };
  
  const createOrderFail = (state, action) => {
    return updateObject(state, { loading: false });
  };

  //PUT

  const updateOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const updateOrderSuccess = (state, action) => {
    return updateObject(state, {
      orders: state.orders.map(order => {
        if (order.id === action.order.id) {
          return action.order;
        }
        return order;
      }),
      loading: false
    });
  };
  
  
  const updateOrderFail = (state, action) => {
    return updateObject(state, { loading: false });
  };


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart( state, action );
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess( state, action );
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail( state, action );
        case actionTypes.DELETE_ORDER_START: return deleteOrderStart( state, action );
        case actionTypes.DELETE_ORDER_SUCCESS: return deleteOrderSuccess( state, action );
        case actionTypes.DELETE_ORDER_FAIL: return deleteOrderFail( state, action );
        case actionTypes.CREATE_ORDER_START: return createOrderStart( state, action );
        case actionTypes.CREATE_ORDER_SUCCESS: return createOrderSuccess( state, action );
        case actionTypes.CREATE_ORDER_FAIL: return createOrderFail( state, action );
        case actionTypes.PUT_ORDER_START: return updateOrderStart( state, action );
        case actionTypes.PUT_ORDER_SUCCESS: return updateOrderSuccess( state, action );
        case actionTypes.PUT_ORDER_FAIL: return updateOrderFail( state, action );
        default: return state;
    }
};

export default reducer;
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    productOrders: [],
    loading: false,
    error: false
};
//GET
const fetchProductOrdersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchProductOrdersSuccess = ( state, action ) => {
    return updateObject( state, {
        productOrders: action.productOrders,
        loading: false
    } );
};

const fetchProductOrdersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};
//DELETE 

const deleteProductOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const deleteProductOrderSuccess = (state, action) => {
    return updateObject(state, {
      productOrders: state.productOrders.filter(productOrder => productOrder.id !== action.productOrderId),
      loading: false
    });
  };
  
  const deleteProductOrderFail = (state, action) => {
    return updateObject(state, { loading: false });
  };

  //POST

  const createProductOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const createProductOrderSuccess = (state, action) => {
    return updateObject(state, {
      productOrders: [...state.productOrders, action.productOrder],
      loading: false
    });
  };
  
  const createProductOrderFail = (state, action) => {
    return updateObject(state, { loading: false });
  };

  //PUT

  const updateProductOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const updateProductOrderSuccess = (state, action) => {
    return updateObject(state, {
      productOrders: state.productOrders.map(productOrder => {
        if (productOrder.id === action.productOrder.id) {
          return action.productOrder;
        }
        return productOrder;
      }),
      loading: false
    });
  };
  
  
  const updateProductOrderFail = (state, action) => {
    return updateObject(state, { loading: false });
  };


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PRODUCTORDERS_START: return fetchProductOrdersStart( state, action );
        case actionTypes.FETCH_PRODUCTORDERS_SUCCESS: return fetchProductOrdersSuccess( state, action );
        case actionTypes.FETCH_PRODUCTORDERS_FAIL: return fetchProductOrdersFail( state, action );
        case actionTypes.DELETE_PRODUCTORDER_START: return deleteProductOrderStart( state, action );
        case actionTypes.DELETE_PRODUCTORDER_SUCCESS: return deleteProductOrderSuccess( state, action );
        case actionTypes.DELETE_PRODUCTORDER_FAIL: return deleteProductOrderFail( state, action );
        case actionTypes.CREATE_PRODUCTORDER_START: return createProductOrderStart( state, action );
        case actionTypes.CREATE_PRODUCTORDER_SUCCESS: return createProductOrderSuccess( state, action );
        case actionTypes.CREATE_PRODUCTORDER_FAIL: return createProductOrderFail( state, action );
        case actionTypes.PUT_PRODUCTORDER_START: return updateProductOrderStart( state, action );
        case actionTypes.PUT_PRODUCTORDER_SUCCESS: return updateProductOrderSuccess( state, action );
        case actionTypes.PUT_PRODUCTORDER_FAIL: return updateProductOrderFail( state, action );
        default: return state;
    }
};

export default reducer;
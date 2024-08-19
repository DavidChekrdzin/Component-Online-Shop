import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    products: [],
    loading: false,
    error: false
};
//GET
const fetchProductsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchProductsSuccess = ( state, action ) => {
    return updateObject( state, {
        products: action.products,
        loading: false
    } );
};

const fetchProductsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};
//DELETE 

const deleteProductStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const deleteProductSuccess = (state, action) => {
    return updateObject(state, {
      products: state.products.filter(product => product.id !== action.productId),
      loading: false
    });
  };
  
  const deleteProductFail = (state, action) => {
    return updateObject(state, { loading: false });
  };

  //POST

  const createProductStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const createProductSuccess = (state, action) => {
    return updateObject(state, {
      products: [...state.products, action.product],
      loading: false
    });
  };
  
  const createProductFail = (state, action) => {
    return updateObject(state, { loading: false });
  };

  //PUT

  const updateProductStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const updateProductSuccess = (state, action) => {
    return updateObject(state, {
      products: state.products.map(product => {
        if (product.id === action.product.id) {
          return action.product;
        }
        return product;
      }),
      loading: false
    });
  };
  
  
  const updateProductFail = (state, action) => {
    return updateObject(state, { loading: false });
  };


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart( state, action );
        case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess( state, action );
        case actionTypes.FETCH_PRODUCTS_FAIL: return fetchProductsFail( state, action );
        case actionTypes.DELETE_PRODUCT_START: return deleteProductStart( state, action );
        case actionTypes.DELETE_PRODUCT_SUCCESS: return deleteProductSuccess( state, action );
        case actionTypes.DELETE_PRODUCT_FAIL: return deleteProductFail( state, action );
        case actionTypes.CREATE_PRODUCT_START: return createProductStart( state, action );
        case actionTypes.CREATE_PRODUCT_SUCCESS: return createProductSuccess( state, action );
        case actionTypes.CREATE_PRODUCT_FAIL: return createProductFail( state, action );
        case actionTypes.PUT_PRODUCT_START: return updateProductStart( state, action );
        case actionTypes.PUT_PRODUCT_SUCCESS: return updateProductSuccess( state, action );
        case actionTypes.PUT_PRODUCT_FAIL: return updateProductFail( state, action );
        default: return state;
    }
};

export default reducer;
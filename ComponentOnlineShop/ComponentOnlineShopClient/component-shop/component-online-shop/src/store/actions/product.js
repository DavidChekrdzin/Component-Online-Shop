import * as actionTypes from './actionTypes';
import axios from '../../../axios-api'


//FETCH//////////////////////////////////////////////////////
export const fetchProductsSuccess = ( products ) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products
    };
};

export const fetchProductsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    };
};

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    };
};

export const fetchProducts = () => {
    return dispatch => {
      dispatch(fetchProductsStart());
      axios.get('/Products')
        .then(res => {
          const fetchedProducts = res.data.map(product => ({ ...product }));
          dispatch(fetchProductsSuccess(fetchedProducts));
        })
        .catch(err => {
          dispatch(fetchProductsFail(err));
        });
    };
  };

  //DELETE//////////////////////////////////////////////////////

  export const deleteProductSuccess = (productId) => {
    return {
      type: actionTypes.DELETE_PRODUCT_SUCCESS,
      productId
    };
  };
  
  export const deleteProductFail = (error) => {
    return {
      type: actionTypes.DELETE_PRODUCT_FAIL,
      error
    };
  };
  
  export const deleteProductStart = () => {
    return {
      type: actionTypes.DELETE_PRODUCT_START
    };
  };
  
  export const deleteProduct = (productId) => {
    return dispatch => {
      dispatch(deleteProductStart());
      const token = localStorage.getItem('token');
      axios.delete(`/Products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: { productId },
      })
        .then(res => {
          dispatch(deleteProductSuccess(productId));
        })
        .catch(err => {
          dispatch(deleteProductFail(err));
        });
    };
  };
  //CREATE//////////////////////////////////////////////////////
  export const createProductSuccess = (product) => {
    return {
      type: actionTypes.CREATE_PRODUCT_SUCCESS,
      product
    };
  };
  
  export const createProductFail = (error) => {
    return {
      type: actionTypes.CREATE_PRODUCT_FAIL,
      error
    };
  };
  
  export const createProductStart = () => {
    return {
      type: actionTypes.CREATE_PRODUCT_START
    };
  };
  
  export const createProduct = (productData, callback) => {
    console.log(productData);
    return dispatch => {
      const token = localStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
  
      dispatch(createProductStart());
      axios.post('/Products', productData, { headers })
        .then(res => {
          dispatch(createProductSuccess(res.data));
          callback(true);
        })
        .catch(err => {
          dispatch(createProductFail(err));
          callback(false);
        });
    };
  };
  //PUT//////////////////////////////////////////////////////
  export const putProductSuccess = (product) => {
    return {
      type: actionTypes.PUT_PRODUCT_SUCCESS,
      product
    };
  };
  
  export const putProductFail = (error) => {
    return {
      type: actionTypes.PUT_PRODUCT_FAIL,
      error
    };
  };
  
  export const putProductStart = () => {
    return {
      type: actionTypes.PUT_PRODUCT_START
    };
  };
  
  export const putProduct = (productData) => {
    return dispatch => {
      dispatch(putProductStart());
      const token = localStorage.getItem('token');
      axios.put(`/Products/${productData.id}`, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          dispatch(putProductSuccess(res.data));
        })
        .catch(err => {
          dispatch(putProductFail(err));
        });
    };
  };

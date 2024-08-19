import * as actionTypes from './actionTypes';
import axios from '../../../axios-api'
//FETCH//////////////////////////////////////////////////////
export const fetchProductOrdersSuccess = ( productOrders ) => {
  return {
      type: actionTypes.FETCH_PRODUCTORDERS_SUCCESS,
      productOrders: productOrders
  };
};

export const fetchProductOrdersFail = ( error ) => {
  return {
      type: actionTypes.FETCH_PRODUCTORDERS_FAIL,
      error: error
  };
};

export const fetchProductOrdersStart = () => {
  return {
      type: actionTypes.FETCH_CATEGORIES_START
  };
};

export const fetchProductOrders = () => {
  return dispatch => {
    dispatch(fetchProductOrdersStart());
    axios.get('/ProductOrder')
      .then(res => {
        const fetchedProductOrders = res.data.map(productOrder => ({ ...productOrder }));
        dispatch(fetchProductOrdersSuccess(fetchedProductOrders));
      })
      .catch(err => {
        dispatch(fetchProductOrdersFail(err));
      });
  };
};

  //DELETE//////////////////////////////////////////////////////

  export const deleteProductOrderSuccess = (productOrderId) => {
    return {
      type: actionTypes.DELETE_PRODUCTORDER_SUCCESS,
      productOrderId
    };
  };
  
  export const deleteProductOrderFail = (error) => {
    return {
      type: actionTypes.DELETE_PRODUCTORDER_FAIL,
      error
    };
  };
  
  export const deleteProductOrderStart = () => {
    return {
      type: actionTypes.DELETE_PRODUCTORDER_START
    };
  };
  
  export const deleteProductOrder = (productOrderId) => {
    return dispatch => {
      dispatch(deleteProductOrderStart());
      const token = localStorage.getItem('token');
      axios.delete(`/ProductOrder/${productOrderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: { productOrderId },
      })
        .then(res => {
          dispatch(deleteProductOrderSuccess(productOrderId));
        })
        .catch(err => {
          dispatch(deleteProductOrderFail(err));
        });
    };
  };
  //CREATE//////////////////////////////////////////////////////
  export const createProductOrderSuccess = (productOrder) => {
    return {
      type: actionTypes.CREATE_PRODUCTORDER_SUCCESS,
      productOrder
    };
  };
  
  export const createProductOrderFail = (error) => {
    return {
      type: actionTypes.CREATE_PRODUCTORDER_FAIL,
      error
    };
  };
  
  export const createProductOrderStart = () => {
    return {
      type: actionTypes.CREATE_PRODUCTORDER_START
    };
  };
  
  export const createProductOrder = (productOrderData, callback) => {
    console.log(productOrderData);
    return dispatch => {
      const token = localStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
  
      dispatch(createProductOrderStart());
      axios.post('/ProductOrder', productOrderData, { headers })
        .then(res => {
          dispatch(createProductOrderSuccess(res.data));
          callback(true);
        })
        .catch(err => {
          dispatch(createProductOrderFail(err));
          callback(false);
        });
    };
  };
  //PUT//////////////////////////////////////////////////////
  export const putProductOrderSuccess = (productOrder) => {
    return {
      type: actionTypes.PUT_PRODUCTORDER_SUCCESS,
      productOrder
    };
  };
  
  export const putProductOrderFail = (error) => {
    return {
      type: actionTypes.PUT_PRODUCTORDER_FAIL,
      error
    };
  };
  
  export const putProductOrderStart = () => {
    return {
      type: actionTypes.PUT_PRODUCTORDER_START
    };
  };
  
  export const putProductOrder = (productOrderData) => {
    return dispatch => {
      dispatch(putProductOrderStart());
      const token = localStorage.getItem('token');
      axios.put(`/ProductOrder/${productOrderData.id}`, productOrderData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          dispatch(putProductOrderSuccess(res.data));
        })
        .catch(err => {
          dispatch(putProductOrderFail(err));
        });
    };
  };

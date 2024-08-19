import * as actionTypes from './actionTypes';
import axios from '../../../axios-api'


//FETCH//////////////////////////////////////////////////////
export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return dispatch => {
      dispatch(fetchOrdersStart());
      axios.get('/Orders')
        .then(res => {
          const fetchedOrders = res.data.map(order => ({ ...order }));
          dispatch(fetchOrdersSuccess(fetchedOrders));
        })
        .catch(err => {
          dispatch(fetchOrdersFail(err));
        });
    };
  };

  //DELETE//////////////////////////////////////////////////////

  export const deleteOrderSuccess = (orderId) => {
    return {
      type: actionTypes.DELETE_ORDER_SUCCESS,
      orderId
    };
  };
  
  export const deleteOrderFail = (error) => {
    return {
      type: actionTypes.DELETE_ORDER_FAIL,
      error
    };
  };
  
  export const deleteOrderStart = () => {
    return {
      type: actionTypes.DELETE_ORDER_START
    };
  };
  
  export const deleteOrder = (orderId) => {
    return dispatch => {
      dispatch(deleteOrderStart());
      const token = localStorage.getItem('token');
      axios.delete(`/Orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: { orderId },
      })
        .then(res => {
          dispatch(deleteOrderSuccess(orderId));
        })
        .catch(err => {
          dispatch(deleteOrderFail(err));
        });
    };
  };
  //CREATE//////////////////////////////////////////////////////
  export const createOrderSuccess = (order) => {
    return {
      type: actionTypes.CREATE_ORDER_SUCCESS,
      order
    };
  };
  
  export const createOrderFail = (error) => {
    return {
      type: actionTypes.CREATE_ORDER_FAIL,
      error
    };
  };
  
  export const createOrderStart = () => {
    return {
      type: actionTypes.CREATE_ORDER_START
    };
  };
  
  export const createOrder = (orderData, callback) => {
    console.log(orderData);
    return dispatch => {
      const token = localStorage.getItem('token');
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
  
      dispatch(createOrderStart());
      axios.post('/Orders', orderData, { headers })
        .then(res => {
          dispatch(createOrderSuccess(res.data));
          callback(true);
        })
        .catch(err => {
          dispatch(createOrderFail(err));
          callback(false);
        });
    };
  };
  //PUT//////////////////////////////////////////////////////
  export const putOrderSuccess = (order) => {
    return {
      type: actionTypes.PUT_ORDER_SUCCESS,
      order
    };
  };
  
  export const putOrderFail = (error) => {
    return {
      type: actionTypes.PUT_ORDER_FAIL,
      error
    };
  };
  
  export const putOrderStart = () => {
    return {
      type: actionTypes.PUT_ORDER_START
    };
  };
  
  export const putOrder = (orderData) => {
    return dispatch => {
      dispatch(putOrderStart());
      const token = localStorage.getItem('token');
      axios.put(`/Orders/${orderData.id}`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          dispatch(putOrderSuccess(res.data));
        })
        .catch(err => {
          dispatch(putOrderFail(err));
        });
    };
  };

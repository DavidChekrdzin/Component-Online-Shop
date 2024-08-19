import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    expiration: null,
    username: null,
    error: null,
    loading: false,
    isSignup : true
};

const loginStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const loginSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.token,
        expiration : action.expiration,
        username: action.username,
        error: null,
        loading: false
     } );
};

const loginFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const registerStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const registerSuccess = (state, action) => {
    return updateObject( state, { 
        error: null,
        loading: false,
        isSignup : false
     } );
};

const registerFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
}

const logout = (state, action) => {
    return updateObject(state, {
      token: null,
      expiration: null,
      username: null,
      error: null,
      loading: false,
    });
  };

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);
        case actionTypes.REGISTER_START: return registerStart(state, action);
        case actionTypes.REGISTER_SUCCESS: return registerSuccess(state, action);
        case actionTypes.REGISTER_FAIL: return registerFail(state, action);
        case actionTypes.LOGOUT: return logout(state, action);
        default:
            return state;
    }
};

export default reducer;
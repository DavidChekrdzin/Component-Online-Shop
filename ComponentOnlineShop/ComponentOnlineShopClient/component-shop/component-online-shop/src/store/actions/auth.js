import axios from '../../../axios-auth';
import * as actionTypes from './actionTypes';

//LOGIN//////////////////////////////////////////////////////////
export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
};

export const loginSuccess = (username,token, expiration) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        username: username,
        token: token,
        expiration : expiration,
    };
};

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    };
};

export const login = (username, password) => {

    return dispatch => {
        dispatch(loginStart());
        const loginData = {
            username: username,
            password: password,
        };

        let url = '/login';

        axios.post(url, loginData)
            .then(response => {
                console.log(response);
                const token = response.data.token;
                localStorage.setItem('token', token);
                const username = response.data.username;
                localStorage.setItem('username', username);
                const expiration = new Date(response.data.expiration);
                console.log("Logged in on: " + expiration.toISOString());
                expiration.setHours(expiration.getHours() + 2);
                console.log("Token expires on: " + expiration.toISOString());
                localStorage.setItem('expiration', expiration.toISOString());
                dispatch(loginSuccess(response.data.username, response.data.token, response.data.expiration));
                alert("You successfully logged in!");
                return response.data;
            })
            .catch(err => {
                console.log(err);
                dispatch(loginFail(err));
            });
    };
};

//REGISTER//////////////////////////////////////////////////////////

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    };
};

export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        isSignup : false
    };
};



export const registerFail = (error) => {
    return {
        type: actionTypes.REGISTER_FAIL,
        error: error
    };
};

export const register = (username, email, password) => {
    return dispatch => {
        dispatch(registerStart());
        const registerData = {
            username: username,
            email: email,
            password: password,
        };

        let url = '/register';

        axios.post(url, registerData)
            .then(response => {
                console.log(response);
                dispatch(registerSuccess());
                alert("You successfully registered!");
            })
            .catch(err => {
                console.log(err);
                dispatch(registerFail(err));
            });
    };
};

//LOGOUT//////////////////////////////////////////////////////////

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('username');
        dispatch({ type: actionTypes.LOGOUT });
    };
};
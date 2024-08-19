import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Layout from './hoc/Layout';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import ProductListings from './containers/ProductListings';
import productReducer from './store/reducers/product';
import categoryReducer from './store/reducers/category';
import authReducer from './store/reducers/auth';
import orderReducer from './store/reducers/order';
import productOrderReducer from './store/reducers/productOrder';
import Auth from './containers/Auth/Auth';
import AdminProductListings from './containers/AdminProductListings';
import AdminCategory from './containers/AdminCategory';
import AdminOrder from './containers/AdminOrder';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    productOrder: productOrderReducer,
    order: orderReducer,
    category: categoryReducer,
    auth: authReducer,
    product: productReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

class App extends Component{
  render() {
    return (
      <Provider store={store}>
            <BrowserRouter>
              <div>
              <Layout>
                <Routes>
                  <Route path="/auth" exact element={<Auth/>} />
                  <Route path="/orders" exact element={<AdminOrder/>} />
                  <Route path="/categories" exact element={<AdminCategory/>} />
                  <Route path="/products" exact element={<AdminProductListings/>} />
                  <Route path="/" element={<ProductListings/>} />
                </Routes>
              </Layout>
              </div>
            </BrowserRouter>
      </Provider>
    )
  }
}

export default App;

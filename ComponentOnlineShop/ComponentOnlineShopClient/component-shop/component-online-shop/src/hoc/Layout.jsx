import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import * as actions from '../store/actions/index';

class Layout extends Component {
  render() {
    let navbarItems = localStorage.getItem('username') ? (
      <>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin options
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/orders">Orders</a></li>
            <li><a className="dropdown-item" href="/categories">Categories</a></li>
            <li><a className="dropdown-item" href="/products">Products</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <div className="d-flex align-items-center">
          <span className='navbar-brand'>User logged in: {localStorage.getItem('username')}</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="d-flex align-items-center">
          <button className="btn btn-primary" onClick={this.props.onLogout}>Logout</button>
          </div>
        </li>
      </>
    ) : (
      <>
        <li className="nav-item">
          <button className="btn btn-primary">
          <NavLink className="nav-link" to='/auth'>SignIn/SignUp</NavLink>
          </button>
          
        </li>
      </>
    );
    return (
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <NavLink className="nav-link" to='/'>Component Online Shop</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {navbarItems}
                </ul>
              </div>
            </div>
          </nav>
            <main>
                {this.props.children}
            </main>
        </>
    )
  }
}

const mapStateToProps = state => {
  return {
      username: state.auth.username,
      token: state.auth.token,
      expiration: state.auth.expiration
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Layout);

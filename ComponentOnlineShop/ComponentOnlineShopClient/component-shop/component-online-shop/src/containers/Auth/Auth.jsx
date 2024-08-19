import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Auth extends Component { 
    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        isSignup: true,
        error: false
    }

    validateRegisterForm = (event) => {
        event.preventDefault();

        const { username, email, password, confirmPassword} = this.state;

        // Check if all required fields are filled
        if (!username || !email || !password || !confirmPassword) {
          alert('Please fill in all required fields');
          return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email)) {
            alert('Email adress is not valid!');
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;
        if (!passwordRegex.test(password)) {
          alert('Password must contain an uppercase character, lowercase character, a digit, and a non-alphanumeric character. Passwords must be at least six characters long');
          return;
        }
      
        if(!username.length > 30 || username.length<2){
          alert('Username must be between 2 and 30 characters');
          return;
        }
      
        if(password !== confirmPassword){
          alert('Passwords do not match');
          return;
        };
      
        this.submitRegisterForm();
    }
    
    submitRegisterForm = () => {
        console.log(this.props.onRegister);
        this.props.onRegister(this.state.username, this.state.email, this.state.password);
    }

    validateLogInForm = (event) => {
        event.preventDefault();

        const { username, password} = this.state;

        // Check if all required fields are filled
        if (!username || !password) {
          alert('Please fill in all required fields');
          return;
        }
      
        this.submiLogInForm();
    }
    submiLogInForm = () => {
        console.log(this.props.onLogin);
        this.props.onLogin(this.state.username, this.state.password);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, this.validatePassword);
    }

    render () {
        const form = this.state.isSignup ? 
        (   //signup form
        <form onSubmit={this.validateRegisterForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Register</h2>
            <div className='row'>
              <label className=''>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                className=''
                placeholder='Username'
                value={this.state.username}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Email</label>
              <input
                type='text'
                id='email'
                name='email'
                className=''
                placeholder='Email'
                value={this.state.email}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                className=''
                placeholder='Password'
                value={this.state.password}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Confirm Password</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                className=''
                placeholder='confirmPassword'
                value={this.state.confirmPassword}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className="row">
              <div className="col-6 text-center">
                <button className="btn btn-info align-center w-100" type='button' onClick={this.switchAuthModeHandler}>Switch to Signin</button>
              </div>
              <div className="col-6 text-center">
                <button className="btn btn-success align-center w-100" type='submit'>ORDER</button>
              </div>
            </div>
        </form>
          ): 
        (//signin form
            <form onSubmit={this.validateLogInForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Sign in</h2>

            <div className='row'>
              <label className=''>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                className=''
                placeholder='Username'
                value={this.state.username}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                className=''
                placeholder='Password'
                value={this.state.password}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className="row">
              <div className="col-6 text-center">
                <button className="btn btn-info align-center w-100" type='button' onClick={this.switchAuthModeHandler}>Switch to Signup</button>
              </div>
              <div className="col-6 text-center">
                <button className="btn btn-success align-center w-100" type='submit'>Log in</button>
              </div>
            </div>
          </form>
                );

        return (
            <div className='container'>
                {form}
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onRegister: (username, email, password) => dispatch(actions.register(username, email, password)),
      onLogin: (username, password) => dispatch(actions.login(username, password))
    };
  };

  export default connect(null, mapDispatchToProps)((props) => <Auth {...props} />);







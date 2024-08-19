import React, { Component } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Modal from '../UI/Modal/Modal';
import ShopCartCard from '../components/ShopCartCard';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../components/Spinner';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import cartIcon from '../assets/images/cart.svg';


class ProductListings extends Component {
    state = {
        shopCart: [],
        error: false,
        purchasable: false,
        showCheckout: false,
        showCheckoutForm: false,
        priceSum:0,
        name: '',
        surname: '',
        address: '',
        city: '',
        phoneNumber: '',
        deliveryType: '',
        date: null
    }

    componentDidMount () {
      this.props.onFetchProducts();
  }

    addToCartHandler = (productData) => {
      const newProductData = { ...productData, key: uuidv4() };
      this.setState(prevState => ({
        shopCart: [...prevState.shopCart, newProductData],
        priceSum: prevState.priceSum + productData.price
      }), () => {
        console.log("Current shopping cart: ");
        this.state.shopCart.map(product => {
          console.log(product);
        });
        this.checkPurchasable();
      });
    }

    removeFromCartHandler = (productData) => {
        this.setState(prevState => ({
            shopCart: prevState.shopCart.filter(product => product.key !== productData.key),
            priceSum: prevState.priceSum - productData.price
          }), () => {
            console.log("Current shopping cart: ");
            this.state.shopCart.map(product => {
              console.log(product);
            });
            this.checkPurchasable();
          });
    }

    checkPurchasable = () => {
      this.setState(() => ({
        purchasable: this.state.shopCart.length > 0
      }), () => {
        if(this.state.shopCart.length > 0) {
          this.state.purchasable = true;
        }else{
          this.state.purchasable = false;
        }
      })
    }

    purchaseCancelHandler = () => {
        this.setState(() => ({
          showCheckout: false
        }));
    }

    purchaseHandler = () => {
      this.setState(() => ({
        showCheckout: true
      }));
  }

  purchaseContinueCancelHandler = () => {
    this.setState(() => ({
      showCheckoutForm: false
    }));
}

purchaseContinueHandler = () => {
  this.setState(() => ({
    showCheckoutForm: true
  }));
}

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
  this.setState({ [event.target.surname]: event.target.value });
  this.setState({ [event.target.address]: event.target.value });
  this.setState({ [event.target.city]: event.target.value });
  this.setState({ [event.target.phoneNumber]: event.target.value });
  this.setState({ [event.target.deliveryType]: event.target.value });
};


validateCheckoutForm = (event) => {
  event.preventDefault();

  const { name, surname, address, city, phoneNumber, deliveryType } = this.state;

  // Check if all required fields are filled
  if (!name || !surname || !address || !city || !phoneNumber || !deliveryType) {
    alert('Please fill in all required fields');
    return;
  }

  // Check if phone number is valid
  const phoneNumberRegex = /^\d{9,10}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    alert('Invalid phone number format. Please use 9 or 10 digits');
    return;
  }

  const onlyAlphabeticalRegex = /^[a-zA-Z\s]*$/;

  if(!name.length > 30 || name.length<2){
    alert('Name must be between 2 and 30 characters');
    return;
  }

  if (!onlyAlphabeticalRegex.test(name)) {
    alert('Name must contain only alphabetical characters');
    return;
  }

  if(!surname.length > 50 || surname.length<2){
    alert('Surname must be between 2 and 50 characters');
    return;
  }

  if (!onlyAlphabeticalRegex.test(surname)) {
    alert('Surname must contain only alphabetical characters');
    return;
  }

  if(!address.length > 50 || address.length<2){
    alert('Address must be between 2 and 50 characters');
    return;
  }

  if(!city.length > 50 || city.length<2){
    alert('City must be between 2 and 50 characters');
    return;
  }

  if (!onlyAlphabeticalRegex.test(city)) {
    alert('City name must contain only alphabetical characters');
    return;
  }

  // Check if delivery type is valid
  const validDeliveryTypes = ['homeDelivery', 'storePickup', 'courierService'];
  if (!validDeliveryTypes.includes(deliveryType)) {
    alert('Invalid delivery type');
    return;
  }

  this.submitCheckoutForm();
}

submitCheckoutForm = () => {
  let currentDate = new Date(Date.now());

  const cartWithQuantities = {};
  this.state.shopCart.forEach((product) => {
    if (cartWithQuantities[product.id]) {
      cartWithQuantities[product.id].quantity++;
    } else {
      cartWithQuantities[product.id] = { ...product, quantity: 1 };
    }
  });

  const cartWithQuantitiesArray = Object.values(cartWithQuantities);

  const quantitiesAndIds = cartWithQuantitiesArray.map((product) => ({
    productId: product.id,
    quantity: product.quantity
  }));

  const order = {
    productOrderList: quantitiesAndIds,
    name: this.state.name,
    surname: this.state.surname,
    address: this.state.address,
    city: this.state.city,
    phoneNumber: this.state.phoneNumber.toString(),
    deliveryType: this.state.deliveryType,
    date: currentDate.toISOString().split('T')[0]
  }
axios.post( 'https://localhost:44301/api/Orders', order )
    .then( response => {
        console.log(response);
        alert('Order submitted successfully! \n Thank you for your order! \n Press OK to continue!');
        this.setState({ shopCart: [] });
        this.setState({ priceSum: 0 });
        this.setState({ showCheckout: false });
        this.setState({ showCheckoutForm: false });
        this.setState({ purchasable: false });
    } )
    .catch( error => {
      this.setState({ error: true });
        console.log(error);
    } );
}


  render() {
    let products = <Spinner/>;
    if (!this.props.loading) {
        products = this.props.products.map(product => {
            return <Card 
                key={product.id} 
                product={product} 
                addToCart={this.addToCartHandler}
                 />;
        });
    }

    let orderSummary = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (!this.state.error) {
      orderSummary = this.state.shopCart.map(product => {
        return <ShopCartCard 
        key={product.key} 
        product={product} 
        removeFromCart={this.removeFromCartHandler}
         />;
        });
    }

    return (
        <>
          <Modal show={this.state.showCheckout} modalClosed={this.purchaseCancelHandler}>
            <div className="row">
              {orderSummary}
            </div>
            <div className="row">
              <div className="col-6 text-center">
                <button className="btn btn-danger align-center w-100" onClick={this.purchaseCancelHandler}>CANCEL</button>
              </div>
              <div className="col-6 text-center">
                <button className="btn btn-success align-center w-100" onClick={this.purchaseContinueHandler}>CHECKOUT</button>
              </div>
              <p>Total price:{this.state.priceSum}RSD</p>
            </div>
          </Modal>

          <Modal show={this.state.showCheckoutForm} modalClosed={this.purchaseContinueCancelHandler}>
          <form onSubmit={this.validateCheckoutForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Checkout</h2>

            <div className='row'>
              <label className=''>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                className=''
                placeholder='Name'
                value={this.state.name}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Surname</label>
              <input
                type='text'
                id='surname'
                name='surname'
                className=''
                placeholder='Surname'
                value={this.state.surname}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Address</label>
              <input
                type='text'
                id='address'
                name='address'
                className=''
                placeholder='Adress'
                value={this.state.address}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>City</label>
              <input
                type='text'
                id='city'
                name='city'
                className=''
                placeholder='City'
                value={this.state.city}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Phone Number</label>
              <input
                type='number'
                id='phoneNumber'
                name='phoneNumber'
                className=''
                placeholder='Phone Number'
                value={this.state.phoneNumber}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Delivery Type</label>
              <select
                id='deliveryType'
                name='deliveryType'
                className=''
                value={this.state.deliveryType}
                required
                onChange={this.handleChange}
              >
                <option value=''>Select delivery type</option>
                <option value='homeDelivery'>Home Delivery</option>
                <option value='storePickup'>Store Pickup</option>
                <option value='courierService'>Courier Service</option>
              </select>
            </div>
            <div className="row">
              <div className="col-6 text-center">
                <button className="btn btn-danger align-center w-100" type='button' onClick={this.purchaseContinueCancelHandler}>CANCEL</button>
              </div>
              <div className="col-6 text-center">
                <button className="btn btn-success align-center w-100" type='submit'>ORDER</button>
              </div>
              <p>Total price:{this.state.priceSum}RSD</p>
            </div>
          </form>

          </Modal>
        <div className="container-flex text-center mt-5">
        <button className="btn btn-success"disabled={!this.state.purchasable} onClick={this.purchaseHandler}>
          <div className="container">
          <img src={cartIcon}/>ORDER NOW
          </div>
         
          </button>
        </div>
        <div className="container-flex border mt-5 p-3 mx-auto w-80">
          
            {this.state.loading ? (<Spinner loading={this.state.loading}/>) : (<div className="row g-2">{products}</div>)}
          
        </div>
        </>

    );
  }
}

const mapStateToProps = state => {
  return {
      products: state.product.products,
      loading: state.product.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchProducts: () => dispatch( actions.fetchProducts() )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListings);

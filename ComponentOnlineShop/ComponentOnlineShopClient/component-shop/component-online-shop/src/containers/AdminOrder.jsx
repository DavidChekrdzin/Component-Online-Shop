import React, { Component } from 'react';
import AdminCardOrder from '../components/AdminCardOrder';
import Modal from '../UI/Modal/Modal';
import Spinner from '../components/Spinner';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import AdminCardProductOrder from '../components/AdminCardProductOrder';
import plusIcon from '../assets/images/plus-square.svg';

class AdminOrder extends Component {
    state = {
        error: false,
        showOrderView: false,
        showOrderContentsView: false,
        id: null,
        productOrderList: [],
        date: '',
        name: '',
        surname: '',
        address: '',
        city: '',
        phoneNumber: '',
        deliveryType: '',
        productOrdersFiltered: []
    }

    componentDidMount () {
      this.props.onFetchOrders();
      this.props.onFetchProductOrders();
  }

  showOrderViewCancelHandler = () => {
    this.setState(() => ({
      showOrderView: false
    }));
}

  showOrderViewHandler = () => {
  this.setState(() => ({
    showOrderView: true
  }));
}

  showOrderContentsCancelHandler = () => {
    this.setState(() => ({
      showOrderContentsView: false
    }));
  }

  showOrderContentsHandler = (orderData) => {
    this.setState(() => ({
      productOrdersFiltered:[]
    }))
    this.setState(prevState => ({
      productOrdersFiltered: prevState.productOrdersFiltered.concat(
        this.props.productOrders.filter(item => item.orderId === orderData.id)
      )
    }));
  
    this.setState(() => ({
      showOrderContentsView: true
    }));
  }

deleteOrderHandler = (id) => {
  this.props.onDeleteOrder(id);
}

editOrderHandler = (orderData) => {
  this.setState({
    id: orderData.id,
    productOrderList: orderData.productOrderList,
    date: orderData.date,
    name: orderData.name,
    surname: orderData.surname,
    address: orderData.address,
    city: orderData.city,
    phoneNumber: orderData.phoneNumber,
    deliveryType: orderData.deliveryType,
    showOrderView: true
  });
}

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
  this.setState({ [event.target.surname]: event.target.value });
  this.setState({ [event.target.address]: event.target.value });
  this.setState({ [event.target.city]: event.target.value });
  this.setState({ [event.target.phoneNumber]: event.target.value });
  this.setState({ [event.target.deliveryType]: event.target.value });
};


validateOrderForm = (event) => {
  event.preventDefault();
  console.log(this.state.id);
  const {name, surname, address, city, phoneNumber, deliveryType } = this.state;

  if (!name || !surname || !address || !city || !phoneNumber || !deliveryType) {
    alert('Please fill in all required fields');
    return;
  }

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

  this.submitOrderForm();
}

submitOrderForm = () => {
  
  const order = {
    id: this.state.id,
    name: this.state.name,
    date: this.state.date,
    productOrderList: this.state.productOrderList,
    surname: this.state.surname,
    address: this.state.address,
    city: this.state.city,
    phoneNumber: this.state.phoneNumber,
    deliveryType: this.state.deliveryType
  };

  console.log(order);

  if (this.state.id === null) {
  console.log("Order edit failed. Order ID is null");
  } else {
    this.props.onUpdateOrder(order);
  }
}


  render() {
    let orders = <Spinner/>;
    if (!this.props.loading) {
        orders = this.props.orders.map(order => {
            return <AdminCardOrder 
                key={order.id} 
                order={order} 
                deleteOrder={this.deleteOrderHandler}
                editOrder={this.editOrderHandler}
                showOrderContents={this.showOrderContentsHandler}
                 />;
        });
    }

    let prodorders = <Spinner/>;
    if (!this.props.loading) {
      prodorders = this.state.productOrdersFiltered.map(prodorder => {
            return <AdminCardProductOrder 
                key={prodorder.id} 
                productOrder={prodorder}
                 />;
        });
    }

    return (
        <>
          <Modal show={this.state.showOrderView} modalClosed={this.showOrderViewCancelHandler}>
          <form onSubmit={this.validateOrderForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Edit Order</h2>
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
                <button className="btn btn-danger align-center w-100" type='button' onClick={this.showOrderViewCancelHandler}>CANCEL</button>
              </div>
              <div className="col-6 text-center">
                <button className="btn btn-success align-center w-100" type='submit'>SUBMIT</button>
              </div>
            </div>
          </form>
          </Modal>

          <Modal show={this.state.showOrderContentsView} modalClosed={this.showOrderContentsCancelHandler}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Order Contents</h2>
            <div className="row">
              {prodorders}
            </div>
            <div className='row'>
              <div className="col-6 text-center">
                <button className="btn btn-danger align-center w-100" type='button' onClick={this.showOrderContentsCancelHandler}>CANCEL</button>
              </div>
            </div>
          </Modal>

        <div className="container-flex border mt-5 p-3 mx-auto w-80">
            {this.state.loading ? (<Spinner loading={this.state.loading}/>) : (<div className="row g-2">{orders}</div>)}
        </div>
        </>

    );
  }
}

const mapStateToProps = state => {
  return {
      orders: state.order.orders,
      productOrders: state.productOrder.productOrders,
      loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
    onUpdateOrder: (orderData) => dispatch(actions.putOrder(orderData)),
    onDeleteOrder: (orderId) => dispatch(actions.deleteOrder(orderId)),
    onFetchProductOrders: () => dispatch(actions.fetchProductOrders()),
    onUpdateProductOrder: (orderData) => dispatch(actions.putProductOrder(orderData)),
    onDeleteProductOrder: (orderId) => dispatch(actions.deleteProductOrder(orderId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrder);

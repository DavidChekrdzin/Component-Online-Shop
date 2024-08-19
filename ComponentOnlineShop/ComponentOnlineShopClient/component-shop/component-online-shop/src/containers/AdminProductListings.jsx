import React, { Component } from 'react';
import AdminCard from '../components/AdminCard';
import Modal from '../UI/Modal/Modal';
import Spinner from '../components/Spinner';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import plusIcon from '../assets/images/plus-square.svg';


class AdminProductListings extends Component {
    state = {
        error: false,
        showProductView: false,
        id: null,
        name: '',
        price: '',
        description: '',
        categoryId: ''
    }

    componentDidMount () {
      this.props.onFetchProducts();
      this.props.onFetchCategories();
  }

  showProductViewCancelHandler = () => {
    this.setState(() => ({
      showProductView: false
    }));
}

  showProductViewHandler = () => {
  this.setState(() => ({
    showProductView: true
  }));
}

deleteProductHandler = (id) => {
  this.props.onDeleteProduct(id);
}

editProductHandler = (productData) => {
  this.setState({
    id: productData.id,
    name: productData.name,
    price: productData.price,
    description: productData.description,
    showProductView: true
  });
}

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
  this.setState({ [event.target.price]: event.target.value });
  this.setState({ [event.target.description]: event.target.value });
  this.setState({ [event.target.categoryId]: event.target.value });
};


validateProductForm = (event) => {
  event.preventDefault();
  console.log(this.state.id);
  const { name, price, description, categoryId } = this.state;

  // Check if all required fields are filled
  if (!name || !price || !description || !categoryId) {
    alert('Please fill in all required fields');
    return;
  }

  const priceRegex = /^\d+(\.\d{2})?$/;

  if(!name.length > 100 || name.length<2){
    alert('Name must be between 2 and 100 characters');
    return;
  }

  if(!description.length > 300 || description.length<2){
    alert('Description must be between 2 and 300 characters');
    return;
  }

  if(price <= 0){
    alert('Price must be greater than 0');
    return;
  }

  if(categoryId === 0 || categoryId < 0){ 
    alert('Please select a valid category');
    return;
  }

  if (!priceRegex.test(price)) {
    alert('Price must not contain non-numeric characters, and must have more than two decimal places.The price must have a decimal point WITH following digits after the decimal point');
    return;
  }

  this.submitProductForm();
}

submitProductForm = () => {
  
  const product = {
    name: this.state.name,
    price: this.state.price,
    description: this.state.description,
    categoryId: this.state.categoryId,
    id: this.state.id
  };

  console.log(product);

  if (this.state.id === null) {
    delete product.id;
    this.props.onCreateProduct(product, (success) => {
      if (success) {
        this.setState({
          id: null,
          name: '',
          price: 0,
          description: '',
          categoryId: 0,
          showProductViewHandler: false
        });
      }
    });
  } else {
    this.props.onUpdateProduct(product);
  }
}


  render() {
    let products = <Spinner/>;
    if (!this.props.loading) {
        products = this.props.products.map(product => {
            return <AdminCard 
                key={product.id} 
                product={product} 
                deleteProduct={this.deleteProductHandler}
                editProduct={this.editProductHandler}
                 />;
        });
    }
    let categories = <Spinner/>;
    if (this.props.categories.length > 0) {
      categories = (
        <select
          id='categoryId'
          name='categoryId'
          className=''
          value={this.state.categoryId}
          required
          onChange={this.handleChange}
        >
          <option value=''>Select Category</option>
          {this.props.categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      );
    }

    return (
        <>
          <Modal show={this.state.showProductView} modalClosed={this.showProductViewCancelHandler}>
          <form onSubmit={this.validateProductForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Product</h2>
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
              <label className=''>Price</label>
              <input
                type='number'
                id='price'
                name='price'
                className=''
                placeholder='Price'
                value={this.state.price}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Description</label>
              <textarea
                type='text'
                id='description'
                name='description'
                className=''
                placeholder='Description'
                value={this.state.description}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className='row'>
              <label className=''>Category:</label>
              {categories}
            </div>
            <div className="row">
              <div className="col-6 text-center">
                <button className="btn btn-danger align-center w-100" type='button' onClick={this.showProductViewCancelHandler}>CANCEL</button>
              </div>
              <div className="col-6 text-center">
                <button className="btn btn-success align-center w-100" type='submit'>SUBMIT</button>
              </div>
            </div>
          </form>

          </Modal>
        <div className="container-flex text-center mt-5">
        <button className="btn btn-success align-center" type='button' onClick={this.showProductViewHandler}><div className="container"><img src={plusIcon}/>Add Product</div></button>
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
      categories: state.category.categories,
      loading: state.product.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts()),
    onFetchCategories: () => dispatch(actions.fetchCategories()),
    onCreateProduct: (productData, callback) => dispatch(actions.createProduct(productData, callback)),
    onUpdateProduct: (productData) => dispatch(actions.putProduct(productData)),
    onDeleteProduct: (productId) => dispatch(actions.deleteProduct(productId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductListings);

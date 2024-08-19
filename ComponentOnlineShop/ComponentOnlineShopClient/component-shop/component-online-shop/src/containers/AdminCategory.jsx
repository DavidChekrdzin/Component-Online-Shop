import React, { Component } from 'react';
import AdminCardCategory from '../components/AdminCardCategory';
import Modal from '../UI/Modal/Modal';
import Spinner from '../components/Spinner';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import plusIcon from '../assets/images/plus-square.svg';


class AdminCategory extends Component {
    state = {
        error: false,
        showCategoryView: false,
        id: null,
        name: ''
    }

    componentDidMount () {
      this.props.onFetchCategories();
  }

  showCategoryViewCancelHandler = () => {
    this.setState(() => ({
      showCategoryView: false
    }));
}

  showCategoryViewHandler = () => {
  this.setState(() => ({
    showCategoryView: true
  }));
}

deleteCategoryHandler = (id) => {
  this.props.onDeleteCategory(id);
}

editCategoryHandler = (categoryData) => {
  this.setState({
    id: categoryData.id,
    name: categoryData.name,
    showCategoryView: true
  });
}

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
};


validateCategoryForm = (event) => {
  event.preventDefault();
  const { name } = this.state;

  // Check if all required fields are filled
  if (!name) {
    alert('Please fill in all required fields');
    return;
  }

  if(!name.length > 50 || name.length<2){
    alert('Name must be between 2 and 50 characters');
    return;
  }

  this.submitCategoryForm();
}

submitCategoryForm = () => {
  
  const category = {
    name: this.state.name,
    id: this.state.id
  };

  console.log(category);

  if (this.state.id === null) {
    delete category.id;
    this.props.onCreateCategory(category, (success) => {
      if (success) {
        this.setState({
          id: null,
          name: '',
          showCategoryViewHandler: false
        });
      }
    });
  } else {
    this.props.onUpdateCategory(category);
  }
}


  render() {
    let categories = <Spinner/>;
    if (!this.props.loading) {
        categories = this.props.categories.map(category => {
            return <AdminCardCategory 
                key={category.id} 
                category={category} 
                deleteCategory={this.deleteCategoryHandler}
                editCategory={this.editCategoryHandler}
                 />;
        });
    }

    return (
        <>
          <Modal show={this.state.showCategoryView} modalClosed={this.showCategoryViewCancelHandler}>
          <form onSubmit={this.validateCategoryForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Category</h2>
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

            <div className="row">
              <div className="col-6 text-center">
                <button className="btn btn-danger align-center w-100" type='button' onClick={this.showCategoryViewCancelHandler}>CANCEL</button>
              </div>
              <div className="col-6 text-center">
                <button className="btn btn-success align-center w-100" type='submit'>SUBMIT</button>
              </div>
            </div>
          </form>

          </Modal>
        <div className="container-flex text-center mt-5">
        <button className="btn btn-success align-center" type='button' onClick={this.showCategoryViewHandler}><div className="container"><img src={plusIcon}/>Add Category</div></button>
        </div>
        <div className="container-flex border mt-5 p-3 mx-auto w-80">
            {this.state.loading ? (<Spinner loading={this.state.loading}/>) : (<div className="row g-2">{categories}</div>)}
        </div>
        </>

    );
  }
}

const mapStateToProps = state => {
  return {
      categories: state.category.categories,
      loading: state.category.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCategories: () => dispatch(actions.fetchCategories()),
    onCreateCategory: (categoryData, callback) => dispatch(actions.createCategory(categoryData, callback)),
    onUpdateCategory: (categoryData) => dispatch(actions.putCategory(categoryData)),
    onDeleteCategory: (categoryId) => dispatch(actions.deleteCategory(categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategory);

import * as actionTypes from './actionTypes';
import axios from '../../../axios-api'


//FETCH//////////////////////////////////////////////////////
export const fetchCategoriesSuccess = ( categories ) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories
    };
};

export const fetchCategoriesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error: error
    };
};

export const fetchCategoriesStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_START
    };
};

export const fetchCategories = () => {
  return dispatch => {
    dispatch(fetchCategoriesStart());
    try {
      axios.get('/Categories')
        .then(res => {
          const fetchedCategories = res.data.map(category => ({ ...category }));
          dispatch(fetchCategoriesSuccess(fetchedCategories));
        })
        .catch(err => {
          dispatch(fetchCategoriesFail(err));
        });
    } catch (error) {
      console.error(error);
      dispatch(fetchCategoriesFail(error));
    }
  };
};

  //DELETE//////////////////////////////////////////////////////

  export const deleteCategorySuccess = (categoryId) => {
    return {
      type: actionTypes.DELETE_CATEGORY_SUCCESS,
      categoryId
    };
  };
  
  export const deleteCategoryFail = (error) => {
    return {
      type: actionTypes.DELETE_CATEGORY_FAIL,
      error
    };
  };
  
  export const deleteCategoryStart = () => {
    return {
      type: actionTypes.DELETE_CATEGORY_START
    };
  };
  
  export const deleteCategory = (categoryId) => {
    return dispatch => {
      dispatch(deleteCategoryStart());
      const token = localStorage.getItem('token');
      axios.delete(`/Categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: { categoryId },
      })
        .then(res => {
          dispatch(deleteCategorySuccess(categoryId));
        })
        .catch(err => {
          dispatch(deleteCategoryFail(err));
        });
    };
  };

    //CREATE//////////////////////////////////////////////////////
    export const createCategorySuccess = (category) => {
      return {
        type: actionTypes.CREATE_CATEGORY_SUCCESS,
        category
      };
    };
    
    export const createCategoryFail = (error) => {
      return {
        type: actionTypes.CREATE_CATEGORY_FAIL,
        error
      };
    };
    
    export const createCategoryStart = () => {
      return {
        type: actionTypes.CREATE_CATEGORY_START
      };
    };
    
    export const createCategory = (categoryData, callback) => {
      console.log(categoryData);
      return dispatch => {
        const token = localStorage.getItem('token');
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        };
    
        dispatch(createCategoryStart());
        axios.post('/Categories', categoryData, { headers })
          .then(res => {
            dispatch(createCategorySuccess(res.data));
            callback(true);
          })
          .catch(err => {
            dispatch(createCategoryFail(err));
            callback(false);
          });
      };
    };
    //PUT//////////////////////////////////////////////////////
    export const putCategorySuccess = (category) => {
      return {
        type: actionTypes.PUT_CATEGORY_SUCCESS,
        category
      };
    };
    
    export const putCategoryFail = (error) => {
      return {
        type: actionTypes.PUT_CATEGORY_FAIL,
        error
      };
    };
    
    export const putCategoryStart = () => {
      return {
        type: actionTypes.PUT_CATEGORY_START
      };
    };
    
    export const putCategory = (categoryData) => {
      return dispatch => {
        dispatch(putCategoryStart());
        const token = localStorage.getItem('token');
        axios.put(`/Categories/${categoryData.id}`, categoryData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
          .then(res => {
            dispatch(putCategorySuccess(res.data));
          })
          .catch(err => {
            dispatch(putCategoryFail(err));
          });
      };
    };
  

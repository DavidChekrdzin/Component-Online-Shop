import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    categories: [],
    loading: false,
    error: false
};
//GET
const fetchCategoriesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchCategoriesSuccess = ( state, action ) => {
    return updateObject( state, {
        categories: action.categories,
        loading: false
    } );
};

const fetchCategoriesFail = ( state, action ) => {
    return updateObject( state, { loading: false,error:true } );
    
};

//DELETE 

const deleteCategoryStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const deleteCategorySuccess = (state, action) => {
    return updateObject(state, {
      categories: state.categories.filter(category => category.id !== action.categoryId),
      loading: false
    });
  };
  
  const deleteCategoryFail = (state, action) => {
    return updateObject(state, { loading: false });
  };

    //POST

    const createCategoryStart = (state, action) => {
        return updateObject(state, { loading: true });
      };
      
      const createCategorySuccess = (state, action) => {
        return updateObject(state, {
          categories: [...state.categories, action.category],
          loading: false
        });
      };
      
      const createCategoryFail = (state, action) => {
        return updateObject(state, { loading: false });
      };

//PUT

  const updateCategoryStart = (state, action) => {
    return updateObject(state, { loading: true });
  };
  
  const updateCategorySuccess = (state, action) => {
    return updateObject(state, {
      categories: state.products.map(category => {
        if (category.id === action.category.id) {
          return action.category;
        }
        return category;
      }),
      loading: false
    });
  };
  
  const updateCategoryFail = (state, action) => {
    return updateObject(state, { loading: false });
  };

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_CATEGORIES_START: return fetchCategoriesStart( state, action );
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess( state, action );
        case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail( state, action );
        case actionTypes.DELETE_CATEGORY_START: return deleteCategoryStart( state, action );
        case actionTypes.DELETE_CATEGORY_SUCCESS: return deleteCategorySuccess( state, action );
        case actionTypes.DELETE_CATEGORY_FAIL: return deleteCategoryFail( state, action );
        case actionTypes.CREATE_CATEGORY_START: return createCategoryStart( state, action );
        case actionTypes.CREATE_CATEGORY_SUCCESS: return createCategorySuccess( state, action );
        case actionTypes.CREATE_CATEGORY_FAIL: return createCategoryFail( state, action );
        case actionTypes.PUT_CATEGORY_START: return updateCategoryStart( state, action );
        case actionTypes.PUT_CATEGORY_SUCCESS: return updateCategorySuccess( state, action );
        case actionTypes.PUT_CATEGORY_FAIL: return updateCategoryFail( state, action );
        default: return state;
    }
};

export default reducer;
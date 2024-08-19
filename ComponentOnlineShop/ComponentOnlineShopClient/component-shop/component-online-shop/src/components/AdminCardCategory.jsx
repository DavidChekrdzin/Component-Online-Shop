import { useState } from 'react';

const adminCardCategory = (props) => {

        const categoryData = {
          id: props.category.id,
          name: props.category.name,
        }

    return(
        <div className='col-xs-12 col-md-6 col-lg-3'>
        <div className="card h-100">
            <div className="card-header bg-primary text-white">
                {props.category.name}
            </div>
            <button className='btn btn-danger my-1' onClick={() => props.deleteCategory(categoryData.id)}>
                DELETE
            </button>
            <button className='btn btn-primary my-1' onClick={() => props.editCategory(categoryData)}>
                EDIT
            </button>
        </div>
        </div>
    );
    };
export default adminCardCategory;
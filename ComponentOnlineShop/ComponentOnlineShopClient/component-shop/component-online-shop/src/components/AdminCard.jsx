import { useState } from 'react';

const adminCard = (props) => {
        const [showFullDescription, setShowFullDescription] = useState(false);

        let description = props.product.description;
      
        if (!showFullDescription) {
          description = description.substring(0, 90) + '...';
        }

        const productData = {
          id: props.product.id,
          name: props.product.name,
          description: props.product.description,
          price: props.product.price,
          categoryName: props.product.categoryName,
        }

    return(
        <div className='col-xs-12 col-md-6 col-lg-3'>
        <div className="card h-100">
            <div className="card-header bg-primary text-white">
                {props.product.name}
            </div>
            <h6 className="card-subtitle my-2 text-muted">
                {props.product.categoryName}
            </h6>
            <div className="card-body">
                {description}
            </div>
            <button onClick={() => setShowFullDescription((prevState) => !prevState)}className='btn btn-sm btn-outline-primary mb-3'>
                {showFullDescription ? 'Less' : 'More'}
            </button>
            <div className="card-footer">
                {props.product.price} RSD
            </div>
            <button className='btn btn-danger mb-3' onClick={() => props.deleteProduct(productData.id)}>
                DELETE
            </button>
            <button className='btn btn-primary mb-3' onClick={() => props.editProduct(productData)}>
                EDIT
            </button>
        </div>
        </div>
    );
    };
export default adminCard;
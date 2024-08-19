import { useState } from 'react';

const card = (props) => {
        const [showFullDescription, setShowFullDescription] = useState(false);

        let description = props.product.description;
      
        if (!showFullDescription) {
          description = description.substring(0, 90) + '...';
        }

        const productData = {
          id: props.product.id,
          name: props.product.name,
          description: description,
          price: props.product.price,
          categoryName: props.product.categoryName
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
            <button className='btn btn-success mb-3' onClick={() => props.addToCart(productData)}>
                Add to cart
            </button>
        </div>
        </div>
    );
    };
export default card;
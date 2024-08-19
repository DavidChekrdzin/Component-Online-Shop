const shopCartCard = (props) => {
        const productData = {
          id: props.product.id,
          name: props.product.name,
          description: props.product.description,
          price: props.product.price,
          categoryName: props.product.categoryName,
          key: props.product.key
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
            <div className="card-footer">
                {props.product.price} RSD
            </div>
            <button className='btn btn-danger mb-3' onClick={() => props.removeFromCart(productData)}>
                Remove from cart
            </button>
        </div>
        </div>
    );
    };
export default shopCartCard;
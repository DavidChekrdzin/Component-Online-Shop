import { useState } from 'react';

const adminCardProductOrder = (props) => {

        const productOrderData = {
          id: props.productOrder.id,
          quantity: props.productOrder.quantity,
          price: props.productOrder.price,
          priceSum: props.productOrder.priceSum,
          productName: props.productOrder.product.name
        }

    return(
        <div className='col-xs-12 col-md-6 col-lg-3'>
        <div className="card h-100">
            <div className="card-header bg-primary text-white">
                Product name: {props.productOrder.product.name} 
            </div>
            <h6 className="card-subtitle my-2 text-muted">
                Product Order ID: {props.productOrder.id}
            </h6>
            <div className="card-body">
                Quantity: {props.productOrder.quantity}<br/>
                Price per item: {props.productOrder.price} RSD
            </div>
            <div className="card-footer">
                Price sum: {props.productOrder.priceSum} RSD
            </div>
        </div>
        </div>
    );
    };
export default adminCardProductOrder;
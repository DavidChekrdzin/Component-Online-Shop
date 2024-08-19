import { useState } from 'react';

const adminCardOrder = (props) => {

        const orderData = {
          id: props.order.id,
          orderTotal: props.order.orderTotal,
          date: props.order.date,
          productOrderList: props.order.productOrderList,
          name: props.order.name,
          surname: props.order.surname,
          address: props.order.address,
          city: props.order.city,
          phoneNumber: props.order.phoneNumber,
          deliveryType: props.order.deliveryType
        }

    return(
        <div className='col-xs-12 col-md-6 col-lg-3'>
        <div className="card h-100">
            <div className="card-header bg-primary text-white">
                Order ID: {props.order.id}
            </div>
            <h6 className="card-subtitle my-2 text-muted">
                Order date: {props.order.date}
            </h6>
            <div className="card-body">
            {props.order.name} {props.order.surname}<br/>
                {props.order.address} {props.order.city}<br/>
                {props.order.phoneNumber}<br/>
                Delivery type: {props.order.deliveryType}
            </div>
            <div className="card-footer">
                Order total: {props.order.orderTotal} RSD
            </div>
            <button className='btn btn-danger mb-3' onClick={() => props.deleteOrder(orderData.id)}>
                DELETE
            </button>
            <button className='btn btn-primary mb-3' onClick={() => props.editOrder(orderData)}>
                EDIT
            </button>
            <button className='btn btn-warning mb-3' onClick={() => props.showOrderContents(orderData)}>
                CONTENTS OF THE ORDER
            </button>
        </div>
        </div>
    );
    };
export default adminCardOrder;
import React, { Component } from 'react';;
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop.jsx';

const Modal = (props) => {
        return (
            <>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div className='Modal' style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                        <div className="modal-body">
                        {props.children}
                        </div>
                </div>
            </>
        );
}

export default Modal;
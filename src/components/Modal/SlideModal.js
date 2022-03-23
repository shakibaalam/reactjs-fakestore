import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const SlideModal = (props) => {
    console.log(props)
    const { image, title, category, description, price, rating } = props.product
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={image} className='w-50 m-auto' alt="" />
                    <h3 className='mt-3'>Price: {price}</h3>
                    <h6>Rating: {rating.rate}</h6>
                    <p>Category: {category}</p>
                    <p>{description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SlideModal;
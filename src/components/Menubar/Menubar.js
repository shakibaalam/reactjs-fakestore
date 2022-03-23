import React from 'react';
import "./Menubar.css"

const Menubar = (props) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-2 p-3">
                    <h5>Logo</h5>
                </div>
                <div className="col-md-10 menu">
                    <ul className='d-flex justify-content-end'>
                        <a className='me-5 p-3' href="">Home</a>
                        <a className='me-5 p-3' href="">Contact</a>
                        <a className='me-5 p-3' href="">Cart <sup>{props.count}</sup></a>
                        <a className='me-5 p-3' href="">Login</a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menubar;
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    //show message thank you
    function greeting() {
        const greet = document.getElementById("greeting");
        greet.style.display = 'block';
    }  

    return (
        <div className="cart-viewer">
            <h2>Cart</h2>
            <h5>Course Added: {props.course.length}</h5>
            <h5>Course Price: {props.total}</h5>
            <button onClick={greeting}>Buy Now</button>
            <h4 id='greeting'>Thank You</h4>

            <div className="image-hint">
                <h5>You Choose: &emsp;&emsp;&emsp;&emsp;&emsp;<small>Click icon for deselect</small></h5>
                {
                    props.course.map(course => <img id = "image" onClick = {() => props.deleteMechanism(course)} src={course.imag}></img>) //appear icons for selected course
                }
            </div>
        </div>

    );
};

export default Cart;
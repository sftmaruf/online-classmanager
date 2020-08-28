import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {

    const { name, author, imag, price } = props.course;

    return (
        <div className="Course-Container">
            <div className="course-image">
                <img src={imag} alt="" />
            </div>
            <div className="course-details">
                <h4>{name}</h4>
                <h5>{author}</h5>
            </div>
            <footer>
                <div className = "footer-container">
                    <h6>${price}</h6>
                    <button onClick={() => props.eventHandler(props.course)}><FontAwesomeIcon icon={faCartPlus} /><small> Enroll Now</small></button>
                </div>
            </footer>
        </div>
    );
};

export default Course;
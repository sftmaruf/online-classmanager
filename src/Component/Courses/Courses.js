import React from 'react';
import fakeData from '../../FakeData/fakeData';
import Course from '../Course/Course';

import './Courses.css';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Courses = () => {

    const [course, setCourse] = useState([]);
    const [total, setTotal] = useState(0);

    //eventHandler for adding course
    const eventHandler = (cours) => {
        const newCourse = [...course, cours];
        setCourse(newCourse);
        setTotal(total + cours.price);
    }

    //deleting mechanism - click the icon of selected corurse it will be deselected
    function deleteMechanism(cours) {
        let index;
        course.map(activeCourse => {
            if (activeCourse.id === cours.id) {
                 index = course.indexOf(activeCourse);
            }
        });
        console.log(index);
        course.splice(index, 1);
        setTotal(total - cours.price);
    }


    return (
        <div className="course-cart-container">
            <div className="courses-viewer">
                {
                    fakeData.map(course => <Course course={course} eventHandler={eventHandler} key={course.id}></Course>)
                }
            </div>
            <Cart course = {course} total = {total} deleteMechanism = {deleteMechanism} key = {course.id}></Cart> 
        </div>
    );
};

export default Courses;
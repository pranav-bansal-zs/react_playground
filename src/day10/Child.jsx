import React from "react";
import "./Child.css";
const Child = (props) => {
    return (
        <div className="main-container2">
        <div className="parent-container2">
            <img className="image-tag2"  src={props.image} alt={props.title} />
            <div className='title-description2'>
            <h1 className="title2">{props.title}</h1>
            <p className="description2">{props.description}</p>
            </div>
            </div>
        </div>
    );
}

export default Child;
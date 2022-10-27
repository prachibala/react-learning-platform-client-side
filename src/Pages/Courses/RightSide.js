import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const RightSide = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allcourses")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    });
    return (
        <>
            {courses.map((course) => (
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure>
                        <img src={course.img} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{course.title}</h2>
                        <p>Price:{course.price}$</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default RightSide;

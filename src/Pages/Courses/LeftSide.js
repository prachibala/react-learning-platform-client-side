import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allcourses")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    });
    return (
        <div>
            {categories.map((category) => (
                <div className="bg-primary text-primary-content p-3 mb-4 rounded-lg font-medium text-center">
                    <Link>{category.category}</Link>
                </div>
            ))}
        </div>
    );
};
export default LeftSide;

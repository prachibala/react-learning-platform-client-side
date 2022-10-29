import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading";

const LeftSide = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`${process.env.REACT_APP_serverurl}/get-categories`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            {loading ? (
                <Loading></Loading>
            ) : (
                <div className="leftSide">
                    <div className="bg-primary text-primary-content p-3 mb-4 rounded-lg font-medium text-center mr-5 md:mr-0 ">
                        <Link to={"/courses"}>All Courses</Link>
                    </div>
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-primary text-primary-content p-3 mb-4 rounded-lg font-medium text-center mr-5 md:mr-0 "
                        >
                            <Link to={`/courses?category=${category.id}`}>
                                {category.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
export default LeftSide;

import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Pdf from "react-to-pdf";

const SingleCourse = () => {
    const [course, setCourse] = useState({});
    const params = useParams();
    const targetRef = React.createRef();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_serverurl}/course/${params.courseId}`)
            .then((res) => res.json())
            .then((data) => setCourse(data));
    }, [params.courseId]);
    return (
        <section className="w-3/5 mx-auto my-24 ">
            <div className="grid justify-end mb-10">
                <Pdf
                    targetRef={targetRef}
                    filename="course_details.pdf"
                    scale={0.85}
                >
                    {({ toPdf }) => (
                        <button
                            className="btn btn-secondary mx-auto"
                            onClick={toPdf}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                                />
                            </svg>
                        </button>
                    )}
                </Pdf>
            </div>
            <div
                ref={targetRef}
                className="card lg:card-side bg-base-100 shadow-2xl "
            >
                <figure>
                    <img src={course.img} alt="Album" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-primary">{course.title}</h2>
                    <p>{course.body}</p>
                    <p className="text-primary">
                        <small>Price{course.price}$</small>
                    </p>
                    <div className="card-actions justify-end">
                        <Link
                            to={`/checkout/${course.id}`}
                            className="btn btn-primary"
                        >
                            Get premium access
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCourse;

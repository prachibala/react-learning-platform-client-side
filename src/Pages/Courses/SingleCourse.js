import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCourse = () => {
    const [course, setCourse] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_serverurl}/course/${params.courseId}`)
            .then((res) => res.json())
            .then((data) => setCourse(data));
    }, [params.courseId]);
    return (
        <section className="w-3/5 mx-auto my-24 ">
            <div className="card lg:card-side bg-base-100 shadow-2xl ">
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

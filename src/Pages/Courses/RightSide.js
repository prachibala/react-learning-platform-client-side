import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RightSide = ({ catId }) => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		if (catId) {
			fetch(`http://localhost:5000/get-courses-by-categories/${catId}`)
				.then((res) => res.json())
				.then((data) => setCourses(data));
		} else {
			fetch("http://localhost:5000/all-courses")
				.then((res) => res.json())
				.then((data) => setCourses(data));
		}
	}, [catId]);
	return (
		<div className="rightSide">
			{courses.map((course) => (
				<div
					key={course.id}
					className="card w-full bg-base-100 shadow-xl image-full"
				>
					<figure>
						<img src={course.img} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">{course.title}</h2>
						<p>Price: ${course.price}</p>
						<div className="card-actions justify-end">
							<Link
								to={`/courses/${course.id}`}
								className="btn btn-primary"
							>
								Course Details
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default RightSide;

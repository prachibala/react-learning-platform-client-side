import React from "react";
import svg from "../Images/hero.svg";
import "./HeroSection.css";
const HeroSection = () => {
	return (
		<>
			<section className="hero-section">
				<div className="hero-text">
					<h1 className="text-4xl mb-5 font-semibold">
						Keep Learning Without Limits.
					</h1>
					<p>
						we proviet best education system for you. We are
						committed to providing excellent learning service and an
						overall good experience. Thank you for choosing us.
					</p>
					<button className="btn btn-primary mt-6 w-6/12">
						Our courses
					</button>
				</div>
				<div className="hero-svg">
					<img src={svg} alt="" />
				</div>
			</section>
		</>
	);
};

export default HeroSection;

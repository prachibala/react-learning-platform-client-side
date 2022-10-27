import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.text.value;
        const email = form.email.value;
        const password = form.pass.value;
        console.log(email, password, name);
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register!</h1>
                        <p className="py-6">
                            Register now to start your mind blowing learning
                            journey with us...
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* form start */}
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="name"
                                    name="text"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="pass"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <label className="label ">
                                <p className="label-text-alt   ">
                                    Already, have an account? please{" "}
                                    <Link
                                        to="/login"
                                        className="link link-primary"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </label>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-secondary"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

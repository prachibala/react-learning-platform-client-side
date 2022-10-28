import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
import { GoogleAuthProvider } from "firebase/auth";

const LogIn = () => {
    const { signIn, googleSignin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.pass.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const googleSubmit = () => {
        googleSignin(googleProvider)
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Login now to start your mind blowing learning
                            journey with us...
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* form start */}
                        <form onSubmit={handleSubmit} className="card-body">
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
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Login
                                </button>
                            </div>
                            <p className="label-text-alt text-center mt-5">
                                Login with social accounts
                            </p>
                            <div className="flex justify-center mt-2">
                                <button onClick={googleSubmit}>
                                    <FaGoogle></FaGoogle>
                                </button>

                                <FaGoogle className="ml-3 "></FaGoogle>
                            </div>
                            <label className="label text-center">
                                <p className="label-text-alt   ">
                                    haven't any account? please{" "}
                                    <Link
                                        to="/register"
                                        className="link link-secondary"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
    const params = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        fetch(`${process.env.REACT_APP_serverurl}/course/${params.id}`)
            .then((res) => res.json())
            .then((data) => setCourse(data));
    }, [params.id]);

    const handleBtn = (e) => {
        e.preventDefault();
        toast.success("Congratulation, You Have Successfully Enrolled!", {
            position: "top-center",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <>
            <div className="overflow-hidden w-10/12 mx-auto py-20">
                <ToastContainer
                    position="top-center"
                    autoClose={6000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <h3 className="text-3xl pb-5">Checkout</h3>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Course Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{course.title}</td>
                            <td>${course.price}</td>
                        </tr>

                        <tr>
                            <th></th>
                            <td className="font-bold text-primary">
                                Total Price ={" "}
                            </td>
                            <td className="font-bold text-primary">
                                ${course.price}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="grid justify-end">
                    <button
                        onClick={handleBtn}
                        className="btn btn-primary my-12"
                    >
                        Complete Purchase
                    </button>
                </div>
            </div>
        </>
    );
};

export default CheckOut;

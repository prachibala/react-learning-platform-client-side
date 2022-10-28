const SingleCourse = () => {
    return (
        <section className="w-3/5 mx-auto my-24 ">
            <div className="card lg:card-side bg-base-100 shadow-2xl ">
                <figure>
                    <img src="https://placeimg.com/400/400/arch" alt="Album" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCourse;

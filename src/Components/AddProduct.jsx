import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handelAddbrand = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const brand_name = e.target.brand_name.value.toLowerCase();
        const price = e.target.price.value
        const rating = e.target.rating.value
        const details = e.target.details.value
        const photo = e.target.photo.value

        const addCar = { name, brand_name, price, rating, details, photo }
        console.log(addCar)

        fetch('https://automotive-server-side-9y95p1e4j-md-emons-projects.vercel.app/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(addCar)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24  '>
            <h2 className='text-3xl font-bold'>Add New Car Brand</h2>
            <p className='mb-4'>Car brands, also known as automotive brands or manufacturers, are companies that design, produce, and market automobiles. </p>
            <form onSubmit={handelAddbrand}>
                {/* Form row */}
                <div className=' md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="Enter car name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <select name="brand_name" className="select select-bordered w-full my-custom-select">
                            <option disabled selected>Select a brand</option>
                            <option value="honda">honda</option>
                            <option value="toyto">toyto</option>
                            <option value="ford">ford</option>
                            <option value="bmw">bmw</option>
                            <option value="mercedes-benz">mercedes-benz</option>
                            <option value="tesla">tesla</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                {/* Form row */}
                <div className=' md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='price' placeholder="Enter price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='rating' placeholder="Enter rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Form row */}
                <div className=' md:flex gap-4'>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='details' placeholder="Enter details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className=' md:flex gap-4'>
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='photo' placeholder="Enter Photo url" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <button className="btn mt-4 btn-block bg-[#D2B48C]">Add</button>
            </form>
        </div>
    );
};

export default AddProduct;
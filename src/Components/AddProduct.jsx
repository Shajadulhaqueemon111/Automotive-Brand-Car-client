import React from 'react';

const AddProduct = () => {
    const handelAddbrand=(e)=>{
        e.preventDefault()
        const name=e.target.name.value 
        const brand=e.target.brand.value 
        const price=e.target.price.value 
        const rating=e.target.rating.value 
        const photo=e.target.photo.value

        const addCar={name,brand,price,rating,photo}
        console.log(addCar)
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
                    <label className="input-group">

                        <input type="text" name='brand' placeholder="Enter brand" className="input input-bordered w-full" />
                    </label>
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
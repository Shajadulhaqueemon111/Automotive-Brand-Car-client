import Aos from 'aos';
import React, { useContext, useEffect } from 'react';
import 'aos/dist/aos.css';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Auth/AuthProvider';

const ViewDetails = () => {
    const loadData = useLoaderData();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 200, // Offset (in pixels) from the top of the viewport
        });
    }, []);

    const handleAddToCart = () => {
        if (!user) {
            // Handle the case where the user is not authenticated.
            // You can display an error message or redirect to a login page.
            return;
        }

        const cartItem = { ...loadData, email: user.email };
         console.log(cartItem)
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Added to Cart Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div className="w-3/5 mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl" data-aos="zoom-in">
                <figure className="px-10 pt-10">
                    <img src={loadData.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center" data-aos="zoom-in">
                    <h2 className="card-title">Name: {loadData.name}</h2>
                    <h2 className="card-title">Brand: {loadData.brand_name}</h2>
                    <h2 className="card-title">Rating: {loadData.rating}</h2>
                    <h2 className="card-title">Price: {loadData.price}</h2>
                    <p>{loadData.details}</p>
                    <div className="card-actions flex mt-3">
                        <button onClick={handleAddToCart} className="btn btn-outline btn-secondary">
                            Add to Cart
                        </button>
                        <button className="btn btn-outline btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;

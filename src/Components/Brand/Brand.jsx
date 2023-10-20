import React, { useEffect, useState } from 'react';
import BrandCard from './BrandCard';
import { NavLink } from 'react-router-dom';

const Brand = ({useCard}) => {
    const [brands, setBrand] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setBrand(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2 className='text-3xl font-bold mt-3'>Featured Brands</h2>
            <div className='grid md:grid-cols-2 gap-3'>
                {brands.map((brand) => (
                <NavLink to={`/useCard/${brand.brand_name}`}> <BrandCard key={brand.id} brand={brand} /></NavLink>
                ))}
            </div>
        </div>
    );
};

export default Brand;

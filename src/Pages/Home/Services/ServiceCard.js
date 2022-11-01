import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    // console.log(service)
    const { img, title, price } = service

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between d-flex items-center">
                    <p className='text-orange-700'>Price: ${price}</p>
                    <button className="btn btn-primary btn-sm">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
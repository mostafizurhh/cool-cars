import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData()
    console.log(service)
    return (
        <div>
            <h2>{service.title}</h2>
        </div>
    );
};

export default Checkout;
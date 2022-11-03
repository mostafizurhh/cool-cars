import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <div className='text-center mb-5'>
                <h5 className='text-orange-700 text text-2xl font-semibold mt-5 lg:mt-20'>Service</h5>
                <p className='text-3xl font-bold mb-2'>Our Service Areas</p>
                <p className='capitalize'>the majority have suffered alteration in some form, by injected humour, or</p>
                <p className='capitalize'>randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center mb-20'>
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;
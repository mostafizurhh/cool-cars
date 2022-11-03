import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    // console.log(service)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        const message = form.message.value

        // console.log(name, phone, email, message)

        const order = {
            service: service._id,
            serviceName: service.title,
            price: service.price,
            customer: name,
            phone: phone,
            email: email,
            message: message
        }
    }


    return (
        <div className='p-4 bg-rose-100 mb-16 text-center'>
            <p className='text-2xl mb-5 text-indigo-600'>Service: {service.title}</p>
            <p className='text-2xl mb-5 text-orange-600'>Price: ${service.price}</p>

            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered w-full max-w-md mb-3" readOnly />
                <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full max-w-md mb-3" required />
                <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full max-w-md mb-3" readOnly />
                <textarea name='message' type="text" placeholder="Your Message" className="textarea-bordered textarea w-full h-40 max-w-md" required />
                <button className='btn mt-4'>Confirm Order</button>
            </form>
        </div>
    );
};

export default Checkout;
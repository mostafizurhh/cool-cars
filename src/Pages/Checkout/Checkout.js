import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()

    /*--------------
     navigate user 
     ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    /*-------------------------------------------------*/

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value
        const phone = form.phone.value
        const email = form.email.value
        const message = form.message.value

        /* create order object in order to send data to server */
        const order = {
            service: service._id,
            serviceName: service.title,
            price: service.price,
            customer: name,
            phone: phone,
            email: email,
            message: message
        }

        /* call order API from server to read order object from client side */
        fetch('http://localhost:5000/orders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success('Order placed Successfully')
                    form.reset()
                    navigate(from, { replace: true })/* navigate user */
                }
            })
            .catch(e => console.error(e))
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
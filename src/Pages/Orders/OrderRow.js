import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const OrderRow = ({ order }) => {
    const { user } = useContext(AuthContext)
    const { _id, customer, serviceName, price, email, phone, service } = order;
    const [orderService, setOrderService] = useState([])

    /* loading all orders data */
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
            .catch(e => console.error(e))
    }, [service])

    /* delete a specific data */
    const handleOrderDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
                .catch(e => console.error(e))
        }
    }

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleOrderDelete(_id)} className='btn btn-sm btn-outline btn-error'>x</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-full w-24">
                            <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td className='flex items-center'>
                <div className="avatar">
                    <div className="rounded w-24 h-24 mr-2">
                        {
                            orderService?.img &&
                            <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                        }
                    </div>
                </div>
                {serviceName}
            </td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">status</button>
            </th>
        </tr>
    );
};
export default OrderRow;
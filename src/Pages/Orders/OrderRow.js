import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const OrderRow = ({ order, handleOrderDelete, handleStatusUpdate }) => {
    const { user } = useContext(AuthContext)
    const { _id, customer, serviceName, price, email, phone, service, status } = order;
    const [orderService, setOrderService] = useState([])

    /* loading all orders data */
    useEffect(() => {
        fetch(`https://cool-car-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
            .catch(e => console.error(e))
    }, [service])


    return (
        <tr>
            <th>
                {/* delete a specific data from UI, Server and DB */}
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
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">
                    {status ? status : 'Pending'}
                </button>
            </th>
        </tr>
    );
};
export default OrderRow;
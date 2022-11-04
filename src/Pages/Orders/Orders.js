import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(e => console.error(e))
    }, [user?.email])

    /* delete a specific data from UI, Server and DB */
    const handleOrderDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel the order?')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Order deleted successfully')
                        const remaining = orders.filter(odr => odr._id !== id)
                        setOrders(remaining)
                    }
                })
                .catch(e => console.error(e))
        }
    }

    return (
        <div>
            <p className='text-xl mb-4'> You have {orders.length} orders</p>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Order</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleOrderDelete={handleOrderDelete}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
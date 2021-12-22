import {useState, useEffect} from 'react';
import axios from 'axios';

const PlaceOne = () => {
    const [orders, setOrders] = useState([]);

    const loadOrders = () => {
        axios.get('http://localhost:3000/orders')
        .then((response) => {
            setOrders(response.data);
        });
    }

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <div>
            {orders.map((order) => {
                return (
                    <div key={order.OrderId} className='order-individual'>
                        <p>First Name: {order.CustomerFirstName}</p>
                        <p>Last Name: {order.CustomerLastName}</p>
                        <p>Captured Date: {order.CapturedDate}</p>
                        <p>Email: {order.CustomerEmail}</p>
                        <p>Id: {order.OrderId}</p>
                        <p>Total: {order.OrderTotal}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default PlaceOne;

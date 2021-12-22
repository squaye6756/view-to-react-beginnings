import {useState, useEffect} from 'react';
import axios from 'axios';

const PlaceTwo = () => {
    const [orders, setOrders] = useState([]);
    const [emailSearch, setEmailSearch] = useState('');
    const [validOrders, setValidOrders] = useState([]);

    const loadOrders = () => {
        axios.get('http://localhost:3000/orders')
        .then((response) => {
            setOrders(response.data);
        });
    }

    const changeEmailSearch = (event) => {
        setEmailSearch(event.target.value);
    }

    const clearInput = () => {
        document.getElementById('email-search').value = '';
    }

    const handleSearch = (event) => {
        event.preventDefault();
        const matchedByEmail = [];
        for (const order of orders) {
            if ((order.OrderTotal > 0) && (order.CustomerEmail.toLowerCase() === emailSearch.toLowerCase())) {
                matchedByEmail.push(order);
            }
        }
        // clearInput();
        setValidOrders(matchedByEmail);
        // setEmailSearch('');
    }

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label htmlFor='email'>Search By Email: </label>
                <input type='email' name='email' id='email-search' onChange={changeEmailSearch}/>
                <input type='submit' value='Search'/>
            </form>
            <hr/>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Captured Date</th>
                        <th>Order Id</th>
                        <th>Total</th>
                        <th>Line Items</th>
                    </tr>
                </thead>
                <tbody>
                    {validOrders.map((order) => {
                        return (
                            <tr key={order.OrderId} className='order-individual-by-search'>
                                <td>{order.CustomerFirstName}</td>
                                <td>{order.CustomerLastName}</td>
                                <td>{order.CapturedDate}</td>
                                <td>{order.OrderId}</td>
                                <td>{order.OrderTotal}</td>
                                <td>Details Length: {order.OrderLine.length}</td>
                                /*
                                OL id, itemmdesc, itemcolordesc, quantity, OL SUBtotal
                                */
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PlaceTwo;

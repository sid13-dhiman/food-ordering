import React from 'react';

const OrderHistory = ({ selectedItems }) => {

    // const selectedItems = location?.state?.selectedItems || [];

    return (
        <div>
            <h2>Order History</h2>
            <ul>
                {selectedItems.map((item, index) => (
                    <li key={index}>
                        <div>
                            <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div>
                            <p>Name: {item.name}</p>
                            <p>Price: ₹{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total: ₹{item.price * item.quantity}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderHistory;

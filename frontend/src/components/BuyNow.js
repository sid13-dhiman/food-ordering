import React, { useState } from 'react';

const BuyNow = ({ selectedItems }) => {
    const [showOrderHistory, setShowOrderHistory] = useState(false);

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        selectedItems.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };

    const handleBuyClick = () => {
        alert('Order Successful');
        setShowOrderHistory(true);
    };

    const handleCloseOrderHistory = () => {
        setShowOrderHistory(false);
        window.location.reload(); // This line refreshes the page
    };

    return (
        <div>
            <h2>Selected Items</h2>
            <ul style={{ listStyle: 'none' }}>
                {selectedItems.map((item, index) => (
                    <li key={index}>
                        <div>
                            <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div>
                            <p>Name: {item.name}</p>
                            <p>Price: &#8377;{item.price} x {item.quantity}</p>
                            <p>Subtotal: &#8377;{item.price * item.quantity}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <p>Total Price: &#8377;{calculateTotalPrice()}</p>
            <button type="button" onClick={handleBuyClick} className="btn btn-success">
                Buy
            </button>

            {/* Modal for order details */}
            <div className={`modal ${showOrderHistory ? 'show' : ''}`} tabIndex="-1" style={{ display: showOrderHistory ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Order History</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseOrderHistory}></button>
                        </div>
                        <div className="modal-body">
                            {/* Display order history details in a Bootstrap card */}
                            <div className="card">
                                <img src={selectedItems[0].imageUrl} className="card-img-top" alt={selectedItems[0].name} />
                                <div className="card-body">
                                    <h5 className="card-title">{selectedItems[0].name}</h5>
                                    <p className="card-text">Price: &#8377;{selectedItems[0].price}</p>
                                    <p className="card-text">Quantity: {selectedItems[0].quantity}</p>
                                    <p className="card-text">Total: &#8377;{selectedItems[0].price * selectedItems[0].quantity}</p>
                                    {/* You can customize the content of the card as needed */}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseOrderHistory}>
                                Close
                            </button>
                            {/* <button type="button" className="btn btn-primary">
                                Save changes
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BuyNow from './BuyNow'; // Import the BuyNow component

const OrderNow = (props) => {
    const [cart, setCart] = useState([]); // Initialize an empty cart
    const [selectedItem, setSelectedItem] = useState(null); // To keep track of the selected item
    const { restaurantName } = useParams();
    const [showBuyNow, setShowBuyNow] = useState(false); // State to control BuyNow component visibility

    const restaurants = {
        'Sarovar Portico': {
            categories: {
                Indian: {
                    Breakfast: [
                        { name: 'Idli', price: 90, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnuIpZg0_nPKAz72Sp-3n1VHh-7i4EORxAg&usqp=CAU' },
                        { name: 'Dosa', price: 110, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LVW9nOSk7A4KfRTBwUbkHO1lRHf25uNN9Q&usqp=CAU' },
                    ],
                    Lunch: [
                        { name: 'Biryani', price: 120, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1CScutenwn70gMClHrAddcEtCAcGR2SUPQ&usqp=C' },
                        { name: 'Thali', price: 150, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH63jcvpVH0Xc7IRyiDXuIpxKtiMq-f7ySlQ&usqp=CAU' },
                    ],
                    Dinner: [
                        { name: 'Butter Naan', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGk-LKmmf8Do_eFTsaqOrU3VFD2X87DgDjvw&usqp=CAU' },
                        { name: 'Mix Veg', price: 160, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUD95rTk5BhESm4y557G2JncSpHhljGADPzQ&usqp=CAU' },
                    ],
                },
                Chinese: {
                    Snacks: [
                        { name: 'Chowmein', price: 70, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKN7E5nNju7MFg0AuJ4qVqCAar1KBb3kLhoA&usqp=CAU' },
                        { name: 'Gobi Manchurian', price: 75, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTal99_UqtFcKTzN9CPbF4M-GdUX2lt8zJyAg&usqp=CAU' },
                    ],
                },
                Italian: {
                    Sizzlers: [
                        { name: 'Pizza', price: 350, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3UQ1WyKU87GaXiXozpFo5mc-tqvANrDGTw&usqp=CAU' },
                        { name: 'Focaccia Bread', price: 255, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFxFmiwhcrdLDSEsJ52FApJfIM_lQZZ6MWA&usqp=CAU' },
                    ]
                },
                Beverages: {
                    Drinks: [
                        { name: 'Orange Juice', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ta1ybNoGNht6z0FnuRrKMPPDBgCD3jp4AQ&usqp=CAU' },
                        { name: 'Coke', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbl7ybozioEHy8CYH5cjt_GmkuIT2UWHffkQ&usqp=CAU' },
                    ]
                },
            },
        },

        'Radisson Blu': {
            categories: {
                Indian: {
                    Breakfast: [
                        { name: 'Parantha', price: 60, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhlqStn8UwmHDKCFGu7bgPZMbjVHiFFmdGQ&usqp=CAU' },
                        { name: 'Tea', price: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NcAyQsdDA2UtuYtL1j8EH3Fzb2mnOsmyog&usqp=CAU' },
                    ],
                    Lunch: [
                        { name: 'Chicken', price: 320, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivNJ8d4N_TvS02eVXPJie1vLilTUrSsrltA&usqp=CAU' },
                        { name: 'Rice', price: 150, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTguGZcv-ibYGUp80fiub4AQ4W8lSt8UT6Q&usqp=CAU' },
                    ],
                    Dinner: [
                        { name: 'Naan', price: 30, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidK_B5OaerlTGS3pqe-w8w7ds1Uo5lb96-Q&usqp=CAU' },
                        { name: 'Dal Makhni', price: 160, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCft0Uzg853s56jAzXRik6f7sYTDAO5UtPiw&usqp=CAU' },
                    ],
                },
                Chinese: {
                    Snacks: [
                        { name: 'Hakka Noodles', price: 70, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdFU14tQWYa_GQv9B8oqT3hmE0E29TIB0SQ&usqp=CAU' },
                        { name: 'Manchurian', price: 275, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVngOXjxdJnJoUd3M3Vy5GFCCbdiX0q8UEsg&usqp=CAU' },
                    ],
                },
                Italian: {
                    Sizzlers: [
                        { name: 'Pasta', price: 175, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPN4JiGJ1N5pqeWbSdg27QtjVpCn4LBKooCg&usqp=CAU' },
                        { name: 'Fruit Salad', price: 140, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoR99mvrEyzqO7DlOA4GMmliM3RLxhgDPEg&usqp=CAU' },
                    ]
                },
                Beverages: {
                    Drinks: [
                        { name: 'Mojito', price: 99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHJ-UNh9AaPXhy4PjhomIboAlCstq9BZ44w&usqp=CAU' },
                        { name: 'Coffee', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98FwYOhAJih-Rd4vV3WI-Q3VuAiIScpF-jQ&usqp=CAU' },
                    ]
                },
            },
        },

        'La Plage': {
            categories: {
                Indian: {
                    Breakfast: [
                        { name: 'Upma', price: 90, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStV3dLRgutLdEhi5gyHxRyKTfirndvrqyWug&usqp=CAU' },
                        { name: 'Masala Dosa', price: 110, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tXNH_xCEYOU9wjkNFLKfCHUf1mvc8QmR4g&usqp=CAU' },
                    ],
                    Lunch: [
                        { name: 'Shahi Paneer', price: 220, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKd9N93vE5cHbVgusvrwonDm1Yzgk8GP1y6A&usqp=CAU' },
                        { name: 'Veg Pulao', price: 150, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlmE6fM6Kkv7997fT4ZKJ2tZOLqFLdx_UITQ&usqp=CAU' },
                    ],
                    Dinner: [
                        { name: 'Stuff Naan', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCvm7h7lty_UYhsPj84Y_61jkmdkk04EKnw&usqp=CAU' },
                        { name: 'Fry Dal', price: 160, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnsptZ9RKJc0YDSeprvlRbdrSMYv6eW_3e5A&usqp=CAU' },
                    ],
                },
                Chinese: {
                    Snacks: [
                        { name: 'Manchow Soup', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60q15HFg3uTWPUPUNf1JC6iNh0EjojYB4IQ&usqp=CAU' },
                        { name: 'Tandoori Momos', price: 75, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnkjO00xYriWCyfMzZcIM9F0tom4fhTsw_Q&usqp=CAU' },
                    ],
                },
                Italian: {
                    Sizzlers: [
                        { name: 'Spaghetti', price: 110, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQe9Xs1ILdrNQYRstIOcCjD8uIVouWqLpJg&usqp=CAU' },
                        { name: 'Bruschetta', price: 255, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhV1sgedXooo-KQ3IqpaVtHk6vpgY4pr1lA&usqp=CAU' },
                    ]
                },
                Beverages: {
                    Drinks: [
                        { name: 'ABC Juice', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEj1_odDncFoldIQ4mWireIsMDWd-AUUFTg&usqp=CAU' },
                        { name: 'Strawberry Mocktail', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-LTcnbNK6bzP63KlQBWM-lqrdeB7RNYe_w&usqp=CAU' },
                    ]
                },
            },
        },

        'Sienna store and Cafe': {
            categories: {
                Indian: {
                    Breakfast: [
                        { name: 'Aaloo Parantha', price: 90, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg51gAqwjTKB_eENwi-LJV_OKMIhsn5Zn9_A&usqp=CAU' },
                        { name: 'Mix Parantha', price: 110, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRImiTUC0zgLqDLMfRB-9wxDuborhV5AtnslA&usqp=CAU' },
                    ],
                    Lunch: [
                        { name: 'Tandoori Roti', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3Cr83zblVc1ympJqy8iW_IKzKGiiU8gXtA&usqp=CAU' },
                        { name: 'Palak Paneer', price: 150, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMxywXHJCu0wpVSYix590h4QsTop8Cd2owcw&usqp=CAU' },
                    ],
                    Dinner: [
                        { name: 'Chapati', price: 20, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIo5keTetVfYhKAtIw_-D4a89KZy8gLdlvng&usqp=CAU' },
                        { name: 'Rajmah', price: 160, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGIN06YrDJn3QjxxN1YtkjElzar9sqnofBw&usqp=CAU' },
                    ],
                },
                Chinese: {
                    Snacks: [
                        { name: 'Momos', price: 70, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAEaI0igrWDKx3PRn0e5zMd1RLqQnFKkMWRw&usqp=CAU' },
                        { name: 'Gravy Manchurian', price: 95, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4V0_Jbnyky0hM1g-0JzCSfQ_U8dQDMGXnA&usqp=CAU' },
                    ],
                },
                Italian: {
                    Sizzlers: [
                        { name: 'Mushroom Risotto', price: 410, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzeBbX6iODqnc8xZtswO0nwgR3eWhl9BM68g&usqp=CAU' },
                        { name: 'Pasta Carbonara', price: 255, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RF413YzeONJx3vUmQSg3zuKvMxF9TEizLg&usqp=CAU' },
                    ]
                },
                Beverages: {
                    Drinks: [
                        { name: 'Milkshake', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGwW2T_62xUj6MSipGhVmMl6FaYw-9WxC-g&usqp=CAU' },
                        { name: 'Energy Drink', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Pwns5MJdxvPARNM_cN3hdgSLBkH5U6V8Bw&usqp=CAU' },
                    ]
                },
            },
        },

        'Americano': {
            categories: {
                Indian: {
                    Breakfast: [
                        { name: 'Chana Bhatura', price: 135, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ZUqMP402EX8f2eOn6iqwD8ndnzD5x0EwYA&usqp=CAU' },
                        { name: 'Sandwich', price: 110, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3tuYRr2yPn17ae4oYo5ClnrNyHkRZrIDdg&usqp=CAU' },
                    ],
                    Lunch: [
                        { name: 'Malai Kofta', price: 245, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIfQ7580SqqF-WswUOGMGnuICar96ntyfmg&usqp=CAU' },
                        { name: 'Missi Roti', price: 90, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjY5HGb-XOA0AbkEcuuO40somcVh04SK0lQ&usqp=CAU' },
                    ],
                    Dinner: [
                        { name: 'Chana Masala', price: 250, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6vuRVw34mcgw47IdB3NZqWonemGtMUQyTBA&usqp=CAU' },
                        { name: 'Kadhi Pakora', price: 160, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfJ8SNoBaNMsSyD6TFw-33VazW-GiXLIOeA&usqp=CAU' },
                    ],
                },
                Chinese: {
                    Snacks: [
                        { name: 'Dumplings', price: 150, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-lOEkAMaTqR9XVNT0l9kA8OuIajKgMslcw&usqp=CAU' },
                        { name: 'Thupka', price: 99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSl4j9PzFDRZmojL_Y5n5Sjo8QIDRtrL0UJg&usqp=CAU' },
                    ],
                },
                Italian: {
                    Sizzlers: [
                        { name: 'Cheese Pizza', price: 350, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zNbuM4Pbtvs07mG-L9kSD0in33MdormS2Q&usqp=CAU' },
                        { name: 'Lasagna', price: 255, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRecJ_Ufch3f1tSX7-_BUww7ZM63h8CGLN3aA&usqp=CAU' },
                    ]
                },
                Beverages: {
                    Drinks: [
                        { name: 'Banana Shake', price: 100, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LHE5RJH8DQnD6qkVC4xpFd0PXq3PYejXgA&usqp=CAU' },
                        { name: 'Smoothies', price: 200, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXwjkjm0nckuEkQ0sTiEcDROD7lnEaEZC8w&usqp=CAU' },
                    ]
                },
            },
        },

        'Palms and Sand Beach': {
            categories: {
                Indian: {
                    Breakfast: [
                        { name: 'Kulcha', price: 135, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9l7ZkwEARFSMMSvVkZAIMpQZF7wak8pGErg&usqp=CAU' },
                        { name: 'Cornflakes', price: 110, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKIvHw6WBk8nJx71DeGQCFzN9kuZvRbhYaw&usqp=CAU' },
                    ],
                    Lunch: [
                        { name: 'Paneer Pasanda', price: 245, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoEJQO187F27PHRaEIEqPWcuXibDlBafh_A&usqp=CAU' },
                        { name: 'Makki ki Roti', price: 90, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgqA7zTbsNxTtTbywHQg14snv64ZNo4QYvQ&usqp=CAU' },
                    ],
                    Dinner: [
                        { name: 'Dum Aaloo', price: 250, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMaHV6obtTNEK5208yTMao1aJHjpHvYTnzA&usqp=CAU' },
                        { name: 'Butter Chicken', price: 460, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ706rk31AIXsLdNG5kQZmUBxPAL04S24JYKQ&usqp=CAU' },
                    ],
                },
                Chinese: {
                    Snacks: [
                        { name: 'Chilly Potato', price: 150, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJX7HCjSbEYqFHkffhRo-ELNf7OwIMj7YoA&usqp=CAU' },
                        { name: 'Finger Chips', price: 99, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTKwos94SNwxxBszzi1Xdwp78edib_wPbUw&usqp=CAU' },
                    ],
                },
                Italian: {
                    Sizzlers: [
                        { name: 'Veggies Pizza', price: 350, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMNLEsdvX8xcMyBF92qs674gxS1_l5QfSZg&usqp=CAU' },
                        { name: 'Focaccia', price: 255, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPm3ioMO_qUPy2JXp0S46c-w61r6OWuyW8aA&usqp=CAU' },
                    ]
                },
                Beverages: {
                    Drinks: [
                        { name: 'Blue Mojito', price: 210, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7cfcF20VShHDpsUqUA0aGHbKMoGkL2EwgA&usqp=CAU' },
                        { name: 'Smoothies', price: 200, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHm2GlzUiCDurIXjdFzDIqYOfPqpLvmbtkA&usqp=CAU' },
                    ]
                },
            },
        },
    };

    const addToCart = (item) => {
        // Check if the item is already in the cart'
        // const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
        setCart([...cart, { ...item }]);

        // if (itemIndex !== -1) {
        //     // If it's already in the cart, update the quantity
        //     const updatedCart = [...cart];
        //     updatedCart[itemIndex].quantity += 1;
        //     setCart(updatedCart);
        // } else {
        //     // If it's not in the cart, add it with quantity 1
        //     setCart([...cart, { ...item, quantity: 1 }]);
        // }
    };

    // Function to open the modal and set the selected item
    const openModal = (item) => {
        setSelectedItem({ ...item, quantity: 0 });
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedItem(null);
        addToCart(selectedItem);
        setShowBuyNow(true); // Show the BuyNow component
        props.showAlert("Checkout Successfully", "success");
    };

    const handleBuy = () => {
        props.showAlert('Order Placed Successfully', 'success');
    };

    // const updateSelectedItemQuantity = (newQuantity) => {
    //     // Update the quantity in the state
    //     setSelectedItem({ ...selectedItem, quantity: newQuantity });
    // };

    // const updateQuantity = (increment) => {
    //     const newQuantity = selectedItem.quantity + increment;

    //     if (newQuantity >= 1) {
    //         updateSelectedItemQuantity(newQuantity);
    //     }
    // };
    
    // Function to update quantity in the modal
    const updateQuantity = (value) => {
        setSelectedItem({ ...selectedItem, quantity: selectedItem.quantity + value });
    };

    // Function to calculate the total for the selected category
    // const calculateTotal = () => {
    //     let total = 0;
    //     for (const item of cart) {
    //         if (item.category === restaurantName) {
    //             total += item.price * item.quantity;
    //         }
    //     }
    //     return total;
    // };

    return (
        <div className="container" style={{ backgroundColor: 'floralwhite', width: '70%', marginBottom: '30px' }}>
            <h2 className="pb-3 fs-4">{restaurantName}</h2>

            {restaurants[restaurantName] && (
                <div>
                    {Object.entries(restaurants[restaurantName].categories).map(([category, subcategories]) => (
                        <div key={category}>
                            <h3 style={{ textAlign: 'center' }}>{category}</h3>
                            <table className="table table-borderless table-hover" style={{ fontFamily: 'Arial', backgroundColor: '#f7f7f7' }}>
                                <thead>
                                    <tr>
                                        <th className="col-4">Item</th>
                                        <th className="col-4">Price</th>
                                        <th className="col-4">Add to Cart</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(subcategories).map(([subcategory, items]) => (
                                        <React.Fragment key={subcategory}>
                                            <tr>
                                                <td colSpan="3" style={{ fontSize: 'inherit' }}>
                                                    <strong>{subcategory}</strong>
                                                </td>
                                            </tr>
                                            {items.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="col-4">
                                                        <span>{item.name}</span>
                                                    </td>
                                                    <td className="col-4">
                                                        <span>&#8377;{item.price}</span>
                                                    </td>
                                                    <td className="col-4">
                                                        <button
                                                            type="button"
                                                            onClick={() => openModal(item)}
                                                            className="btn btn-link"
                                                        >
                                                            Add to Cart
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            )}

            {/* Checkout Modal */}
            {selectedItem && !showBuyNow && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedItem.name}</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedItem.imageUrl} alt={selectedItem.name} />
                                <p>Price: &#8377;{selectedItem.price}</p>
                                <div className="item-actions">
                                    <button type="button" className='btn btn-danger' onClick={() => updateQuantity(-1)} style={{ width: '10%' }}>
                                        <i className="fa-solid fa-minus" style={{ color: "#dee0e3", display: 'contents' }}></i></button>
                                    <span style={{ margin: '5px' }}>{selectedItem.quantity}</span>
                                    <button type="button" className='btn btn-warning' onClick={() => updateQuantity(1)} style={{ width: '10%' }}>
                                        <i className="fa-solid fa-plus" style={{ color: "#dee0e3", display: 'contents' }}></i></button>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <p>Total: &#8377;{selectedItem.price * selectedItem.quantity}</p>
                                <button
                                    type="button"
                                    className='btn btn-success'
                                    onClick={() => {
                                        addToCart(selectedItem);
                                        closeModal(); // Close the modal
                                    }}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Render the BuyNow component when showBuyNow is true */}
            {showBuyNow && (
                <BuyNow selectedItems={cart} onBuy={handleBuy} />
            )}
        </div>
    );
};

export default OrderNow;

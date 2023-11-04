import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Redirect to the login page
        navigate('/login');
    };

    // Example restaurant data
    const [restaurantData, setRestaurantData] = useState([]);

    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/fetchrestaurantdata', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token')
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setRestaurantData(data);
                } else if (response.status === 401) {
                    // Handle unauthorized access (e.g., redirect to login page)
                    navigate('/login');
                } else {
                    // Handle other errors here
                    console.error("Failed to fetch restaurant data");
                }
            } catch (error) {
                // Handle network errors and other exceptions
                console.error("Error fetching restaurant data:", error);
            }
        };

        fetchRestaurants();
    }, [navigate]);

    return (
        <>
            <h3>Welcome to the Admin Page</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurantData.map((restaurant, index) => (
                        <tr key={index}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Admin;

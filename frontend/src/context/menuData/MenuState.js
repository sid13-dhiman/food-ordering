import React, { useState } from "react";
import MenuContext from "./menuContext";

const MenuState = (props) => {
    const host = "http://localhost:5000";
    const menuDataInitial = []
    const [menuData, setMenuData] = useState(menuDataInitial)

    const getMenu = async () => {

        // API CALL
        const response = await fetch(`${host}/api/menuData/fetchmenudata`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        });
        const json = await response.json()
        setMenuData(json);
    }

    // Add a menu      
    const addMenu = async (name, category, price, description, file) => {
        const response = await fetch(`${host}/api/menuData/addmenu`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name, category, price, description, file })
        });

        // if (response.status==200){
        //     dispatch (fetch())
        // }
        
        // const menu = await response.json();
        // setMenuData(menuData.concat(menu))

        if(response.status === 200){
            getMenu();
        }
        
    }

    // Delete a note
    const deletemenu = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/menuData/deletemenu/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = response.json(); // parses JSON response into native JavaScript objects
        console.log(json)

        console.log("Deleting the menu with id" + id)
        const newMenuData = menuData.filter((menu) => menu._id !== id); // Assuming _id is the unique identifier
        setMenuData(newMenuData);
    }

    // Edit a note
    const editMenu = async (id, name, category, price, description, file) => {
        // API Call
        const response = await fetch(`${host}/api/menuData/updatemenu/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },

            body: JSON.stringify({ name, category, price, description, file }) // body data type must match "Content-Type" header
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        console.log(json);
        let newMenuData = JSON.parse(JSON.stringify(menuData))
        // Logic to edit in client
        for (let index = 0; index < newMenuData.length; index++) {
            const element = newMenuData[index];
            if (element._id === id) {
                newMenuData[index].name = name;
                newMenuData[index].category = category;
                newMenuData[index].price = price;
                newMenuData[index].description = description;
                newMenuData[index].file = file;
                break;
            }
        }
        setMenuData(newMenuData);
    }

    return (
        <MenuContext.Provider value={{ menuData, addMenu, getMenu, editMenu, deletemenu }}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuState;
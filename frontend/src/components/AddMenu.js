import React, { useState, useContext } from 'react';
import menuContext from '../context/menuData/menuContext';

const AddMenu = (props) => {
    const context = useContext(menuContext);
    const { addMenu } = context;

    const [menu, setMenu] = useState({ name: "", category: "", price: "", description: "", file: "" })
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = ["Chinese", "Italian", "Indian", "Beverages"];
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (e) => {
        if (e) {
            e.preventDefault();
        }
        addMenu(menu.name, menu.category, menu.price, menu.description, menu.file);
        setMenu({ name: '', category: '', price: '', description: '', file: '' });
        props.showAlert('Added Successfully', 'success');
        closeModal();
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setMenu({ ...menu, category });
    }

    const onChange = (e) => {
        setMenu({ ...menu, [e.target.name]: e.target.value });
      };

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className='container mt-1'>
            <button
                type="button"
                className="btn btn-primary"
                onClick={openModal}
            >
                Add Menu
            </button>

            <div className={`modal ${isModalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ marginBottom: '5px', marginLeft: '0px' }}
                                    >
                                        {selectedCategory || "Category"} {/* Display the selected category or a default text */}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {categories.map((category, index) => (
                                            <li key={index}>
                                                <button
                                                    className={`dropdown-item ${selectedCategory === category ? 'selected-category' : ''}`}
                                                    onClick={() => handleCategorySelect(category)}
                                                    type="button"
                                                >
                                                    {category}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} value={menu.name} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="price" name="price"
                                        value={menu.price} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            rows="3"
                                            name="description"
                                            value={menu.description}
                                            onChange={onChange}
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="file" className="form-label">Select a File</label>
                                        <input className="form-control" type="text" id="file" name="file"
                                            value={menu.file} onChange={onChange} />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={() => { handleClick(); closeModal(); }}>Add Menu</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddMenu
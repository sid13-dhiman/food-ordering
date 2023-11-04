import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import menuContext from '../context/menuData/menuContext';
import CategoryItem from './CategoryItem';
import AddMenu from './AddMenu';

const Category = (props) => {
  const navigate = useNavigate();
  const context = useContext(menuContext);
  const { menuData, editMenu, getMenu } = context;
  const categories = ["Chinese", "Italian", "Indian", "Beverages"];

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getMenu()
    }
    else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)

  const [selectedCategory, setSelectedCategory] = useState("");
  const [menu, setMenu] = useState({
    id: "",
    ename: "",
    ecategory: "",
    eprice: "",
    edescription: "",
    efile: "",
  }); // State to store fetched data

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleLogout = () => {
    // Redirect to the login page
    navigate("/login");
  };

  const updateMenu = (currentMenu) => {
    ref.current.click();
    setMenu({
      id: currentMenu._id, ename: currentMenu.name, ecategory: currentMenu.category, eprice: currentMenu.price,
      edescription: currentMenu.description, efile: currentMenu.file
    })
  }

  const handleClick = (e) => {
    editMenu(menu.id, menu.ename, menu.ecategory, menu.eprice, menu.edescription, menu.efile)
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  }

  const onChange = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddMenu showAlert={props.showAlert} />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Category</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
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
                  {categories.map((ecategory) => (
                    <li key={ecategory}>
                      <button
                        className={`dropdown-item ${selectedCategory === ecategory ? 'selected-category' : ''}`}
                        onClick={() => handleCategorySelect(ecategory)}
                        type="button"
                      >
                        {ecategory}
                      </button>
                    </li>
                  ))}
                </ul>

              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="ename" name="ename" onChange={onChange} value={menu.ename} />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="eprice" name="eprice"
                  value={menu.eprice} onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="edescription" name="edescription" rows="3" value={menu.edescription}
                  onChange={onChange}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="file" className="form-label">Select a File</label>
                <input className="form-control" type="text" id="efile" name="efile" value={menu.efile} onChange={onChange} />
              </div>
            </div>

            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <div className='container'>
          {menuData.length === 0 && 'No Menus to display'}
        </div>
        {menuData.map((menu) => {
          return <CategoryItem key={menu._id} updateMenu={updateMenu} showAlert={props.showAlert} menu={menu} />
        })}
      </div>
      <button type="button" className="btn btn-primary mt-3" onClick={handleLogout}>Logout</button>
    </>

  )
}

export default Category
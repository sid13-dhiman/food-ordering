import React, { useContext, useState } from 'react'
import menuContext from '../context/menuData/menuContext';

const CategoryItem = (props) => {
    const context = useContext(menuContext);
    const { deletemenu } = context;
    const { menu, updateMenu } = props;

    const [showMore, setShowMore] = useState(false);
    const [hovered, setHovered] = useState(false);

    const toggleText = () => {
        setShowMore(!showMore);
    };
    return (
        <div className={`col-md-3 ${hovered ? 'show-icons' : ''}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className="card my-3">
                <div className="card-body">
                    <div className='image'>
                        <img src={menu.file} className="card-img-top" alt="..." />
                        <div className='icons'>
                            <i className={`fa-solid fa-trash mx-2 mt-2 hidden-icons`} style={{ color: 'white' }}
                                onClick={() => {
                                    deletemenu(menu._id);
                                    props.showAlert("Deleted Successfully", "success");
                                }}></i>
                            <button type="button" className="btn btn-light ml-auto hidden-icons" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateMenu(menu); }}></i>
                            </button>
                        </div>
                    </div>
                    <h5 className="card-title mt-1 fs-5">{menu.category}</h5>
                    <p className='card-title fs-5'>Price: {menu.price}</p>
                    <p className='card-title fs-5'>Description: {menu.description.length > 50 ? (
                        <>
                            {showMore ? menu.description : menu.description.slice(0, 50) + '... '}
                            <a className="read-more-link" onClick={toggleText}>
                                {showMore ? 'Read less' : 'Read more'}
                            </a>
                        </>
                    ) : null}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CategoryItem
import { useState } from 'react';
import { ImMenu } from "react-icons/im";

import './index.css'


// menu item list 
const menuList = [
    {
        id: 1,
        content: "Home",
    },
    {
        id: 2,
        content: "About",
    },
    {
        id: 3,
        content: "Contact Us",
    }
]

const Header = () => {

    const[activeMenuItemId, setActiveMenuItemId] = useState(menuList[0].id);
    const onChangeMenuItem = id => setActiveMenuItemId(id);

    return (
        <header className="header-bg">
            <div className='container-md container-fluid'>
                <div className="row">
                    <div className="col-12 p-0">
                        <div className='custome-row p-2 p-md-0'>                        
                            {/* chef recipe logo section */}
                            <div className='d-flex align-items-center cursor-pointer '>
                                <img src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character-holding-platter_266639-108.jpg?w=740" alt="chef logo" className='logo' />
                                <h1 className='logo-h1'>CookRecipe</h1>
                            </div>
                            <div className='menu-list d-none d-md-block'>
                                {
                                    menuList.map(each => {
                                        const onActiveItem = () => onChangeMenuItem(each.id);
                                        return <a key={each.id} className={`menu-link ${each.id === activeMenuItemId ? 'active' : null}`} onClick={onActiveItem}>{each.content}</a>
                                    })
                                }
                            </div>

                            {/* small device menu using model */}
                            {/* Button trigger modal*/}
                            <button type="button" className="btn btn-outline-dark d-md-none d-flex justify-conten-center align-items-center" data-toggle="modal" data-target="#exampleModal">
                                <ImMenu size={25} className='text-white' />
                            </button>

                            {/*  Modal */}
                            <div className="modal fade border" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog model-custome-initial">
                                    <div className="modal-content custome-content">
                                        <div className="custome-header">
                                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="custom-body">                                        {
                                                menuList.map(each => {
                                                        const onActiveItem = () => onChangeMenuItem(each.id);
                                                        return <a key={each.id} className={`menu-link mb-3 ${each.id === activeMenuItemId ? 'active' : null}`} onClick={onActiveItem}>{each.content}</a>
                                                    })
                                                }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </header>
    );
}

export default Header
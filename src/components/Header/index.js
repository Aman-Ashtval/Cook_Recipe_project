import {Link, useLocation} from "react-router-dom"
import { ImMenu } from "react-icons/im";

import './index.css'


// menu item list 
const menuList = [
    {
        id: 1,
        content: "Home",
        path: '/'
    },
    {
        id: 2,
        content: "Favorite",
        path: '/favorite'
    },
    {
        id: 3,
        content: "About",
        path: '/about'
    },
    {
        id: 4,
        content: "Contact",
        path: '/contact'
    }
]

const Header = () => {

    const location = useLocation();
    const currentPath = location.pathname

    return (
        <header className="header-bg">
            <div className='container-md container-fluid'>
                <div className="row">
                    <div className="col-12 p-0">
                        <div className='custome-row p-2 p-md-0'>                        
                            {/* chef recipe logo section */}
                            <Link to="/" className='text-decoration-none'>
                                <div className='d-flex align-items-center cursor-pointer '>
                                    <img src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character-holding-platter_266639-108.jpg?w=740" alt="chef logo" className='logo' />
                                    <h1 className='logo-h1'>CookRecipe</h1>
                                </div>
                            </Link>
                            <div className='menu-list d-none d-md-block'>
                                {
                                    menuList.map(each => {
                                        const target = each.content === "Home" ? "" : each.content.toLowerCase();
                                        return <Link to={`/${target}`} key={each.id} className={`menu-link ${each.path === currentPath ? 'active' : null}`}>{each.content}</Link>
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
                                        <div className="custom-body">                                        
                                            {
                                                menuList.map(each => {                                                    
                                                    const target = each.content === "Home" ? "" : each.content.toLowerCase();
                                                    return <Link to={`/${target}`} key={each.id} className={`menu-link mb-3 ${each.path === currentPath ? 'active' : null}`}>{each.content}</Link>
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
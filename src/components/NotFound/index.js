import {Link} from 'react-router-dom'

import "./index.css"

const NotFound = () => {
    return(
        <div className="container-md container-fluid not-found-bg">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" alt="not found" className="w-50 mt-5 mb-5" />
            <h5 className="text-white mt-3">Bad Request!</h5>
            <Link to="/" className="text-decoration-none">
                <button type="button" className="btn btn-warning mb-4 mt-2">Retry</button>
            </Link>
        </div>
    )
}

export default NotFound
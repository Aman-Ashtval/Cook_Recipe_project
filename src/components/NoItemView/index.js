import {Link} from "react-router-dom"

import "./index.css"

const NoItemView = () => {

    return (
        <div className="col-12 p-3 d-flex flex-column justify-content-center align-items-center">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" alt="no item" className="w-50 mt-4 mb-4" />
            <h5 className="text-white mt-3">no item found!</h5>
            <Link to="/" className="text-decoration-none">
                <button type="button" className="btn btn-warning mb-4 mt-2">Retry</button>
            </Link>
        </div>
    )
}

export default NoItemView
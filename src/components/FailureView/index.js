import {Link} from "react-router-dom"

import "./index.css"

const FailureView = () => {

    return (
        <div className="h-100 failure-bg">
            <div className="col-12 h-100 border d-flex flex-column justify-content-center align-items-center">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" alt="failure" className="w-50 mt-4 mb-4" />
                <h5 className="text-white">oops somthing went wrong!</h5>
                <Link to="/" className="text-decoration-none">
                    <button type="button" className="btn btn-warning mb-4 mt-2">Retry</button>
                </Link>
            </div>
        </div>
    )
}

export default FailureView
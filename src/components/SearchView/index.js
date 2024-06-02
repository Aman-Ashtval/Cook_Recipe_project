import { FiSearch } from "react-icons/fi";

import "./index.css"

const SearchView = () => {

    return (
        <>
                {/* nuddle section 1 */}
                <div className="col-2 col-md-2 col-lg-3">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <img src="https://res.cloudinary.com/dh4dcboea/image/upload/v1717293025/nuddle_z8eyrz.png" alt="cup nuddle" className="w-100" />
                    </div>
                </div>

                {/* top search center */}
                <div className="col-8 col-md-8 col-lg-6">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="welcome-h1">Welcome to CookRecipe</h1>
                        <div className="d-flex align-items-center w-100">
                            <input type="search" placeholder="search for Recipe..." className="search-input" />
                            <button type="button" className="search-btn">
                                <FiSearch />
                            </button>
                        </div>
                        <div className="d-none d-md-flex justify-content-center align-items-center p-1 w-100 mt-2">
                            <p className="text-white m-0">Total Recipe: <span className="number-color">200</span></p>
                            <p className="text-white m-0 ml-3">Total Ingredients: <span className="number-color">200</span></p>
                            <p className="text-white m-0 ml-3">Images: <span className="number-color">200</span></p>
                        </div>
                    </div>
                </div>

                {/* nuddle section 2 */}
                <div className="col-2 col-md-2 col-lg-3">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <img src="https://res.cloudinary.com/dh4dcboea/image/upload/v1717293025/nuddle_z8eyrz.png" alt="cup nuddle" className="w-100" />
                    </div>
                </div>

                {/* small and extra small  */}
                <div className="col-12 mt-3 d-md-none">
                    <div className="d-flex justify-content-between align-items-center p-1 w-100 mt-2">
                        <p className="text-white m-0">Total Recipe: <span className="number-color">200</span></p>
                        <p className="text-white m-0 ml-3">Total Ingredients: <span className="number-color">200</span></p>
                        <p className="text-white m-0 ml-3">Images: <span className="number-color">200</span></p>
                    </div>
                </div>
        </>
    );
}

export default SearchView
import Header from "../Header"
import SearchView from "../SearchView"

import './index.css'

const Home = () => {

    return <>
        <Header />
        <div className="container-md container-fluid mt-5">
            <div className="row">                
                <SearchView /> 
                <div className="col-12">                    
                    <hr className="search-section-hr" />
                </div>
            </div>
        </div>
    </>
} 

export default Home
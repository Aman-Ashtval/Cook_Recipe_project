import Header from "../Header"
import SearchView from "../SearchView"
import LatestRecipes from "../LatestRecipes"

import './index.css'

const Home = () => {

    return <>
        <Header />
        <div className="container-md container-fluid mt-5">
            <div className="row">                
                <SearchView /> 
                <div className="col-12">                    
                    <hr className="search-section-hr" />                    
                    <h2 className="latest-recipe">Latest Recipes</h2>
                </div>
                <LatestRecipes />
            </div>
        </div>
    </>
} 

export default Home
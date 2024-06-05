import { useState, useCallback } from "react"

import Header from "../Header"
import SearchView from "../SearchView"
import LatestRecipes from "../LatestRecipes"
import Footer from "../Footer"

import './index.css'

const Home = () => {

    const [userInput, setUserInput] = useState("");

    const onChangeUserInput = useCallback(searchValue => setUserInput(searchValue), []);

    return <>
        <Header />
        <div className="container-md container-fluid mt-5">
            <div className="row">                
                <SearchView onChangeUserInput={onChangeUserInput} userInput={userInput} /> 
                <div className="col-12">                    
                    <hr className="search-section-hr" />                    
                    <h2 className="latest-recipe">Latest Recipes</h2>
                </div>
                <LatestRecipes userInput={userInput} />
            </div>
        </div>
        <Footer />
    </>
} 

export default Home
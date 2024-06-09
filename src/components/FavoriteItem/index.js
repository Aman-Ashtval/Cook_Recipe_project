import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FiSearch } from "react-icons/fi";

import RecipeCard from "../RecipeCard";
import FilterButtons from "../FilterButtons";
import NoItemView from "../NoItemView";

import "./index.css"

// button list
const buttonList = [];
for(let i=65; i<91; i++){
    buttonList.push({id: uuidv4(), value: String.fromCharCode(i)})
}

const FavoriteItem = () => {

    const favoriteRecipesList = JSON.parse(localStorage.getItem('favoriteRecipesList'));

    const [userInput, setUserInput] = useState("");
    const [activeChar, setActiveChar] = useState('');

    const onChangeUserInput = event => setUserInput(event.target.value);
    const onFilterByFirstChar = char => setActiveChar(char);


    const renderFavoriteRecipeView = () => {
        const filteredRecipeList = activeChar !== "" ? favoriteRecipesList.filter(each => each.title.charAt(0).toUpperCase() === activeChar) : favoriteRecipesList;
        const filterRecipeByUserInput = filteredRecipeList.filter(each => each.title.toLowerCase().includes(userInput.toLowerCase()));
        
        return (
            <>
                {
                   filterRecipeByUserInput.length === 0 ? <NoItemView /> : filterRecipeByUserInput.map(recipe => <RecipeCard key={recipe.id} recipeDetails={recipe} />)
                }
                {
                    (filterRecipeByUserInput.length !== 0) && 
                    <div className="col-12 mt-5 mb-5">                   
                        <h2 className="latest-recipe mt-5 mb-4">Brows By Name</h2>  
                        <div className="mt-5 d-flex justify-content-center align-item-center flex-wrap">
                            {
                                buttonList.map(each => <FilterButtons key={each.id} buttonDetails={each} onFilterByFirstChar={onFilterByFirstChar} />)
                            } 
                        </div> 
                    </div>
                }
            </>
        )
    }

    return (
        <div className="container-md container-fluid favorite-bg">
            <div className="row">                
                {/* search section */}
                <div className="col-12 p-5 d-flex justify-content-center">
                    <div className="d-flex align-items-center fav-search-container">
                        <input type="search" placeholder="search for Recipe..." value={userInput} onChange={onChangeUserInput} className="search-input"/>
                        <button type="button" className="search-btn">
                            <FiSearch />
                        </button>
                    </div>
                </div>
                <div className="col-12">                    
                    <hr className="search-section-hr" />                    
                    <h2 className="latest-recipe">Favorite Recipes</h2>
                </div> 
                {/* favorite recipes list */}
                {
                    renderFavoriteRecipeView()
                }              
            </div>
        </div>
    )
}

export default FavoriteItem
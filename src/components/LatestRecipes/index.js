import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


import RecipeCard from "../RecipeCard";
import Loader from "../Loader";

import "./index.css"
import FilterButtons from "../FilterButtons";

// button list
const buttonList = [];
for(let i=65; i<91; i++){
    buttonList.push({id: uuidv4(), value: String.fromCharCode(i)})
}

console.log(buttonList)

const LatestRecipes = () => {

    const [recipesList, setRecipesList] = useState([]);
    const [activeChar, setActiveChar] = useState('');

    const onFilterByFirstChar = char => setActiveChar(char);

    const getData = async() => {
        const url = 'https://chinese-food-db.p.rapidapi.com/';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '7d67958da4msh1080d4276afab7bp1dc686jsnab443bb2bad8',
                'x-rapidapi-host': 'chinese-food-db.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            setRecipesList(data);
        } catch (error) {
            console.error(error);
        }
    }

    useState(() => {
        getData()
    }, [])


    // render recipes cards
    const renderRecipeCardView = () =>{
        const filteredRecipeList = activeChar !== "" ? recipesList.filter(each => each.title.charAt(0).toUpperCase() === activeChar) : recipesList;
        return (
            <>
                {
                    filteredRecipeList.map(recipe => <RecipeCard key={recipe.id} recipeDetails={recipe} />)
                }
                <div className="col-12 mt-5 mb-5">                   
                    <h2 className="latest-recipe mt-5 mb-4">Brows By Name</h2>  
                    <div className="mt-5 d-flex justify-content-center align-item-center flex-wrap">
                        {
                            buttonList.map(each => <FilterButtons key={each.id} buttonDetails={each} onFilterByFirstChar={onFilterByFirstChar} />)
                        } 
                    </div> 
                </div>
            </>
        );
    }

    return (
        <>
            {recipesList.length === 0 ? <Loader /> : renderRecipeCardView()}
        </>
    )
}

export default LatestRecipes
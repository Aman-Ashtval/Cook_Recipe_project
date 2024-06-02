import { useState } from "react"

import RecipeCard from "../RecipeCard";
import Loader from "../Loader";

import "./index.css"

const LatestRecipes = () => {

    const [recipesList, setRecipesList] = useState([]);

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
        return recipesList.map(recipe => <RecipeCard key={recipe.id} recipeDetails={recipe} />)
    }

    return (
        <>
            {recipesList.length === 0 ? <Loader /> : renderRecipeCardView()}
        </>
    )
}

export default LatestRecipes
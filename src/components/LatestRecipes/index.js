import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


import RecipeCard from "../RecipeCard";
import Loader from "../Loader";
import NoItemView from "../NoItemView";
import FailureView from "../FailureView";
import FilterButtons from "../FilterButtons";

import "./index.css"

// button list
const buttonList = [];
for(let i=65; i<91; i++){
    buttonList.push({id: uuidv4(), value: String.fromCharCode(i)})
}

// response constants
const responseConstant = {
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS",
}


const LatestRecipes = props => {

    const {userInput} = props

    const [recipesList, setRecipesList] = useState([]);
    const [activeChar, setActiveChar] = useState('');
    const [responseStatus, setResponseStatus] = useState(responseConstant.inProgress)

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

        const response = await fetch(url, options);

        if(response.ok){
            const data = await response.json();
            setRecipesList(data);
            setResponseStatus(responseConstant.success);
        }else{
            setResponseStatus(responseConstant.failure);
        }
    }

    useState(() => {
        getData()
    }, [])


    // render recipes cards
    const renderSuccessView = () => {
        const filteredRecipeList = activeChar !== "" ? recipesList.filter(each => each.title.charAt(0).toUpperCase() === activeChar) : recipesList;
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
        );
    }

    const renderRecipeCardView = () => {
        switch (responseStatus) {
            case responseConstant.success: 
                return renderSuccessView();
            case responseConstant.failure: 
                return <FailureView />;
            case responseConstant.inProgress: 
                return <Loader />;                                
        
            default:
                return null;
        }
    }

    return (
        <>
            {renderRecipeCardView()}
        </>
    )
}

export default LatestRecipes
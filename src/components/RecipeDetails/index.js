import { useCallback, useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"
import {v4 as uuidv4} from 'uuid'
import { ImArrowDown } from "react-icons/im";
import { BsFillStarFill, BsStar } from "react-icons/bs";

import Loader from "../Loader"
import FailureView from "../FailureView";

import "./index.css"


// response constants
const responseConstant = {
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS",
}

const RecipeDetails = () => {
    
    const favoriteRecipesList = JSON.parse(localStorage.getItem('favoriteRecipesList'));
    
    const {id} = useParams();
    const [recipeDetails, setRecipeDetails] = useState({});
    const [responseStatus, setResponseStatus] = useState(responseConstant.inProgress)
    const [isFavorite, setIsFavorite] = useState(favoriteRecipesList.some(each => each.id === id ))

    const onToggleFavorite = () => {
        if(isFavorite){
            const filteredFavoriteRecipesList = favoriteRecipesList.filter(each => each.id !== id);
            localStorage.setItem('favoriteRecipesList', JSON.stringify(filteredFavoriteRecipesList));
            setIsFavorite(false)
        }else{
            const updatedFavoriteRecipesList = favoriteRecipesList.includes(recipeDetails) ? favoriteRecipesList : [...favoriteRecipesList, recipeDetails];
            localStorage.setItem('favoriteRecipesList', JSON.stringify(updatedFavoriteRecipesList));
            setIsFavorite(true)
        }
    }

    const getRecipeDetails = useCallback(async() => {
        const url = `https://chinese-food-db.p.rapidapi.com/${id}`;
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
            setRecipeDetails(data);
            setResponseStatus(responseConstant.success);
        }else{
            setResponseStatus(responseConstant.failure);
        }
    }, [id])

    useEffect(() => {
        getRecipeDetails()
    },[getRecipeDetails])


    // render success view
    const renderSuccessView = () => {
        const {image, title, ingredients, description, time, method} = recipeDetails
        let count = 1;
        return(
            <div className="row">
                <div className="col-12">
                    <h1 className="recipe-details-h1">Recipe Details</h1>
                </div>
                {/* recipe image section */}
                <div className="col-12 col-md-6">
                    <div className="p-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <p className="ingredients-p m-0 p-0">Add to favorite</p>
                            <button type="button" className="fav-btn" onClick={onToggleFavorite}>
                                {isFavorite ? <BsFillStarFill className="text-warning" />: <BsStar />}
                            </button>
                        </div>
                        <img src={image} alt={title} className="w-100" />
                        <p className="recipe-details-title">{title}</p>
                    </div>
                </div>
                {/* recipe ingredients section*/}
                <div className="col-12 col-md-6">
                    <div className="p-3">
                        <p className="ingredients-p">Ingredients:</p>
                        <ul className="ingredients-list">
                            {
                                ingredients.map(each =><li key={uuidv4()} className="p-2 mb-2 d-flex">
                                    <img src="https://img.freepik.com/free-vector/coloured-chefdesign_1152-73.jpg?t=st=1717849623~exp=1717853223~hmac=fc3f857dff1e73e525a4d5d078fd7b24f2447d7ccaffbb63a8e84b282384ee84&w=740" alt="icon" className="spoon-icon" />
                                    <p className="recipe-ingredient-p">{each}</p>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
                {/* description section */}
                <div className="col-12 col-sm-6 mt-5">
                    <div className="p-3">
                        <h5 className="ingredients-p">Description</h5>
                        <p className="description-p">{description}</p>
                    </div>
                </div>
                {/* recipe time section */}
                <div className="col-12 col-sm-6 mt-5">
                    <div className="p-3">
                        <h5 className="ingredients-p">Recipe Time</h5>
                        <p className="description-p">{time}</p>
                    </div>
                </div>
                {/* recipe method section */}
                <div className="col-12 mt-5">
                    <div className="p-3">
                        <h5 className="ingredients-p text-center">Recipe Methods</h5>
                        <ul className="ingredients-list text-center">
                            {
                                method.map(each => {
                                    const step = `Step ${count}`
                                    count++;

                                    return(
                                        <li key={uuidv4()} className="p-2 mb-2 d-flex flex-column align-items-center">
                                            <ImArrowDown className="arrow-icon" />
                                            <p className="recipe-ingredient-p">{each[step]}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {/* recipe back to home section */}
                <div className="col-12 mt-5 mb-5">
                    <div className="p-3 text-center">
                        <Link to="/" className="text-decoration-none">
                            <button type="button" className="btn btn-warning ">Back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const renderRecipeDetailsView = () => {
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
        <div className="container-md container-fluid recipe-details-bg">
            {renderRecipeDetailsView()}
        </div>
    )
}

export default RecipeDetails
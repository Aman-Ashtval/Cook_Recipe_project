import "./index.css"

const RecipeCard = props => {
    const {recipeDetails} = props
    const {id, title, image, difficulty} = recipeDetails

    // back card style 
    const divStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="col-6 col-md-4 col-lg-3 mt-5">
            <div className="recipe-card">
                <div className="flip-card-inner">
                    <div className="card flip-card-front">
                        <img src={image} alt={title} className="recipe-card-img" />
                        <div className="d-flex justify-content-center align-item-center p-3">
                            <p className="recipe-card-title">{`${title}`}<span className="text-success">{`(${difficulty})`}</span></p>
                        </div>
                    </div>
                    <div className="flip-card-back" style={divStyle}>
                        <button type="button" className="btn btn-warning btn-lg">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
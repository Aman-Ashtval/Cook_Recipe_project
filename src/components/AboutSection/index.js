import {Link} from "react-router-dom"
import "./index.css"

const AboutSection = () => {

    return (
        <div className="container-md container-fluid about-bg">
            <p className="about-p">About</p>
            <p className="about-content">
                Welcome to CookRecipe, your ultimate destination for discovering, sharing, 
                and savoring the finest recipes from around the world. Whether you're a 
                seasoned chef or a home cook just starting out, CookRecipe offers a diverse 
                range of recipes to inspire and elevate your culinary adventures.
            </p>
            <Link to="/" className="mt-4">
                <img src="https://img.freepik.com/premium-vector/smiling-chef-cartoon-character-holding-platter_266639-108.jpg?w=740" alt="chef image" className="chef-img" />
            </Link>
        </div>
    )
}

export default AboutSection
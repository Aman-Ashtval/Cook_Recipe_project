import {Component} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import RecipeDetails from './components/RecipeDetails';
import FavoriteItem from './components/FavoriteItem';

import './App.css';

class App extends Component{

    componentDidMount(){
        localStorage.setItem('favoriteRecipesList', JSON.stringify([]));
    }

    render(){
        return <div className='app-bg'>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route exact path='/' Component={Home} />
                        <Route exact path='/about' Component={AboutSection} />
                        <Route exact path='/contact' Component={ContactSection} />
                        <Route exact path='/recipe/:id' Component={RecipeDetails} />
                        <Route exact path='/favorite' Component={FavoriteItem} />
                    </Routes>  
                <Footer />                  
            </BrowserRouter>
        </div>
    }
}

export default App;

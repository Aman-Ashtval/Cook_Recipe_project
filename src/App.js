import {Component} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';

import './App.css';

class App extends Component{

    render(){
        return <div className='app-bg'>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route exact path='/' Component={Home} />
                        <Route exact path='/about' Component={AboutSection} />
                    </Routes>  
                <Footer />                  
            </BrowserRouter>
        </div>
    }
}

export default App;

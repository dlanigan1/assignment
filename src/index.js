import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import About from './about';
import Book from './book';
import Header from './header';
import Footer from './footer';
import Books from './books';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css';

const Home = (props) =>
    <div>
        <h1>Home page</h1>
    </div>

const Router = (props) =>
    <BrowserRouter>
      <div>
        <Header/>
        <div className="container">
            <Switch>
                <Route path='/about' component={ About } />
                 <Route exact path='/books/' component={ Books } />
                <Route path='/books/:id' component={ Book } />
                <Route exact path='/' component={ Home } />
                <Redirect from='*' to='/' />
            </Switch>
        </div>
        <Footer />
     </div>
    </BrowserRouter>


ReactDOM.render((
    <Router/>
), document.getElementById('root')) ;

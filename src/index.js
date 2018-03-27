import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import About from './about';
import Book from './book';
import Header from './header';
import Footer from './footer';
import Books from './books';
import EditBooks from './editBooks';
import ViewBooks from './viewBooks';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './app.css';

const Home = (props) =>
    <div>
    <h1>Welcome to the Library Book System</h1>
    <h2>Users can add/delete/view books and can check in/out books via the nav bar</h2>
    <h2>Users can also navigate directly to a particular book e.g. /books/1</h2>
    </div>

const Router = (props) =>
    <BrowserRouter>
      <div>
        <Header/>
        <div className="container">
            <Switch>
                <Route path='/about' component={ About } />
                <Route exact path='/books/' component={ Books } />
                <Route path='/viewbooks/:id' component={ Book } />
                <Route path='/editbooks/' component={ EditBooks } />
                <Route path='/viewbooks/' component={ ViewBooks } />
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

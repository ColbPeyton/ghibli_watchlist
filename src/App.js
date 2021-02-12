import React from 'react';

import './styles/App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/MovieDetails';
import PersonalWatchlist from './pages/PersonalWatchlist';

class App extends React.Component {
  render(){
    return(
    <Router>
        <Switch>
        <Route path='/catalog'>
            <Catalog />
        </Route>
        <Route path='/watchlist'>
            <PersonalWatchlist />
        </Route>
        <Route path='/details'>
            <MovieDetails />
        </Route>
        <Route exact path='/'>
            <Home />
        </Route>
        </Switch>
    </Router>      
    );
  } 
}

export default App;

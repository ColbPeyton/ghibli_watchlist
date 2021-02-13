import React from 'react';

import { connect } from 'react-redux'


import './styles/App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/MovieDetails';
import PersonalWatchlist from './pages/PersonalWatchlist';




class App extends React.Component {
  render(){
    return(
    <Router className="App">
        <Switch>
        <Route exact path={`/details/:${this.props.currentFilm.id}`}>
          <MovieDetails /> 
        </Route>
        <Route path='/catalog'>
            <Catalog />
        </Route>
        <Route path='/watchlist'>
            <PersonalWatchlist />
        </Route>
        <Route exact path='/'>
            <Home />
        </Route>
        </Switch>
    </Router>      
    );
  } 
}

const mapStateToProps = state => {
  return {currentFilm: state.currentlyViewedFilm}
}


export default connect(mapStateToProps)(App);

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

import Header from './Header';
import Home from './Home';
import MovieAvaiability from "./MovieAvailability";
import MovieSections from "./MovieSections";
import SuccessfulOrder from "./SuccessfulOrder";

export default function App() {

    const [isHomePage, setIsHomePage] = useState(true)
    const [movieInfo, setMovieInfo] = useState(null);
    const [order, setOrder] = useState({compradores: [], ids: []})
    console.log(order)
    
    return (
        <Router>
            <Header isHomePage={isHomePage} />
            <Switch>
                <Route exact path="/">
                    <Home setIsHomePage={setIsHomePage}/>
                </Route>
                <Route exact path="/sessoes/:idFilme" >
                    <MovieAvaiability setIsHomePage={setIsHomePage}/>
                </Route>
                <Route exact path="/assentos/:idSessao" >
                    <MovieSections movieInfo={movieInfo} setMovieInfo={setMovieInfo} order={order} setOrder={setOrder} />
                </Route>
                <Route path="/success">
                    <SuccessfulOrder movieInfo={movieInfo} order={order} setOrder={setOrder} />
                </Route>
            </Switch>
        </Router>
    );
}
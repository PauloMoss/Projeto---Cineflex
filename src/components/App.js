import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

import Home from './Home';
import MovieAvaiability from "./MovieAvailability";
import MovieSections from "./MovieSections";
import SuccessfulOrder from "./SuccessfulOrder";

export default function App() {

    const [movieInfo, setMovieInfo] = useState(null);
    const [order, setOrder] = useState({nomeComprador: "", cpf: "", ids: []})

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/sessoes/:idFilme" >
                    <MovieAvaiability />
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
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import MovieAvaiability from "./MovieAvailability";
import MovieSections from "./MovieSections";
import SuccessfulOrder from "./SuccessfulOrder";

export default function App() {
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
                    <MovieSections />
                </Route>
                <Route path="/success">
                    <SuccessfulOrder />
                </Route>
            </Switch>
        </Router>
    );
}
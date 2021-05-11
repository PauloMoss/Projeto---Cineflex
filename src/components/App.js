import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import MovieAvaiability from "./MovieAvailability";
import MovieSection from "./MovieSection";
import SuccessfulOrder from "./SuccessfulOrder";

export default function App() {
    return (
        <Router>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path= "/filme/:filmeId">
                    <MovieAvaiability />
                </Route>
                <Route path="/sessao/:sessaoId">
                    <MovieSection />
                </Route>
                <Route path="/success">
                    <SuccessfulOrder />
                </Route>
            </Switch>
        </Router>
    );
}
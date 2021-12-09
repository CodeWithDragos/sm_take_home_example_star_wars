import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import loadable from "@loadable/component";

const Loading = () => (<h1>Loading</h1>)

const LoadableMoviePage = loadable(() => import("./components/MoviePage"), {
    fallback: <Loading />
});

const LoadableMainPage = loadable(() => import("./components/MainPage"), {
    fallback: <Loading />
});

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/movie/:id">
                        <LoadableMoviePage></LoadableMoviePage>
                    </Route>
                    <Route path="/*">
                        <LoadableMainPage></LoadableMainPage>
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

import "./../scss/main.scss";

import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";


import reducers from "./reducers/index";
import Layout from "./containers/layout";
import Phones from "./containers/phones";


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));


const history = syncHistoryWithStore(browserHistory, store)
 

render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path="/" component={Phones}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
)






import "./../scss/main.scss";
import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { /*browserHistory,*/ hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";


import reducers from "./reducers/index";
import Layout from "./containers/layout/index";
import Phones from "./containers/phones/index";
import Phone from "./containers/phone/index";


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(hashHistory, store)
 

render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path="/" component={Phones}/>
                <Route path="categories/:id" component={Phones}/>
            </Route>
            <Route path="phones/:id" component={Phone} />
        </Router>
    </Provider>,
    document.getElementById("root")
)






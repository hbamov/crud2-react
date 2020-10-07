import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

// import UserCreation from "../../containers/UserCreation";
// import UserEditing from "../../containers/UserEditing";

import UsersList from "../../containers/UsersList";

import Header from "../Header/index";

export default function App() {
    return (
        <Router>
            <Header />
            <div
                style={{
                    padding: "24px",
                    backgroundColor: "#f5f5f5",
                    fontFamily: "sans-serif",
                }}
            >
                <Switch>
                    <Route path="/users/create">{/* <UserCreation /> */}</Route>
                    <Route path="/users/edit/:userId">
                        {/* <UserEditing /> */}
                    </Route>
                    <Route exact path="/users">
                        <UsersList />
                    </Route>
                    <Route path="/">
                        <Redirect to="/users" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

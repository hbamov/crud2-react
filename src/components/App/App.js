import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import UsersList from "../../containers/UsersList";
import Header from "../Header/index";
import CreateEditForm from "../CreateEditForm/CreateEditForm";

import * as actions from "../../store/actions/index";

function App() {
    return (
        <>
            <Header />
            <div
                style={{
                    padding: "24px",
                    backgroundColor: "#f5f5f5",
                    fontFamily: "sans-serif",
                }}
            >
                <Switch>
                    <Route path="/users/create">
                        <CreateEditForm actionToDispatch={actions.createUser} />
                    </Route>
                    <Route path="/users/edit/:userID">
                        <CreateEditForm actionToDispatch={actions.editUser} />
                    </Route>
                    <Route exact path="/users">
                        <UsersList />
                    </Route>
                    <Route path="/">
                        <Redirect to="/users" />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;

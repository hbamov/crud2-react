import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import UsersList from "../../containers/UsersList";
import EditUser from "../Forms/EditUser";

import * as actions from "../../store/actions/index";

const App = () => {
    return (
        <Switch>
            <Route path="/users/create">
                <EditUser actionToDispatch={actions.createUser} />
            </Route>
            <Route path="/users/edit/:userID">
                <EditUser actionToDispatch={actions.editUser} />
            </Route>
            <Route exact path="/users">
                <UsersList />
            </Route>
            <Route path="/">
                <Redirect to="/users" />
            </Route>
        </Switch>
    );
};

export default App;

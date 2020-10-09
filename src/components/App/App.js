import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import UserCreation from "../../containers/UserCreation";
// import UserEditing from "../../containers/UserEditing";
import UsersList from "../../containers/UsersList";
import UserCreation from "../../containers/UserCreation";
import Header from "../Header/index";

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
                        <UserCreation />
                    </Route>
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
        </>
    );
}

export default App;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Paper } from "@material-ui/core";

import * as actions from "../store/actions/index";
import EnhancedTable from "../components/Table/EnhancedTable";

const UsersList = (props) => {
    const users = useSelector((state) => state.user.data);
    const dispatch = useDispatch();

    const onDestroyUser = (userID) => dispatch(actions.destroyUser(userID));

    return (
        <Paper style={{ width: "100%" }}>
            <EnhancedTable
                key={users}
                users={users}
                destroyUser={onDestroyUser}
            />
        </Paper>
    );
};

export default UsersList;

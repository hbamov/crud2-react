import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Paper } from "@material-ui/core";

import * as actions from "../store/actions/index";
import indexedDB from "../helpers/indexedDB";
import EnhancedTable from "../components/Table/EnhancedTable";

const UsersList = () => {
    const users = useSelector((state) => state.user.data);
    const dispatch = useDispatch();

    const onDestroyUser = (userID) => dispatch(actions.destroyUser(userID));

    useEffect(() => {
        indexedDB.users.count().then((count) => {
            if (count !== 0) {
                indexedDB.users.clear();
            }

            indexedDB.users
                .bulkAdd(users)
                .then((data) => {
                    console.log("Successfully imported bulk data in IndexedDB");
                })
                .catch((error) => {
                    console.log("Issue occured while saving to IndexedDB");
                });
        });
    }, []);

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

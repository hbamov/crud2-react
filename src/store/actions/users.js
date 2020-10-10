import * as actionTypes from "./actionTypes";

export const createUser = (user) => {
    return {
        type: actionTypes.CREATE_USER,
        user: user,
    };
};

export const editUser = (user) => {
    return {
        type: actionTypes.EDIT_USER,
        user: user,
    };
};

export const destroyUser = (userID) => {
    return {
        type: actionTypes.DESTROY_USER,
        userID: userID,
    };
};

export const toggleUserActions = (userID, toggleValue) => {
    return {
        type: actionTypes.TOGGLE_USER_ACTIONS,
        userID: userID,
        toggleValue: toggleValue,
    };
};

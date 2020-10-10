import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../helpers/utility";
import data from "../../helpers/data.json";

const initialState = {
    data: data,
};

const createUser = (state, action) => {
    const userToAdd = { ...action.user };

    return updateObject(state, { data: [...state.data, userToAdd] });
};

const editUser = (state, action) => {
    let index = state.data.findIndex((user) => user.id === action.user.id);

    let updatedUsers = [
        ...state.data.slice(0, index),
        {
            ...action.user,
        },
        ...state.data.slice(index + 1),
    ];

    return updateObject(state, { data: updatedUsers });
};

const destroyUser = (state, action) => {
    const userID = action.userID;
    const updatedUsers = state.data.filter((user) => user.id !== userID);

    return updateObject(state, { data: updatedUsers });
};

const toggleUserActions = (state, action) => {
    let index = state.data.findIndex((user) => user.id === action.userID);

    let updatedUsers = [
        ...state.data.slice(0, index),
        {
            ...state.data[index],
            showActions: action.toggleValue,
        },
        ...state.data.slice(index + 1),
    ];

    return updateObject(state, { data: updatedUsers });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            return createUser(state, action);
        case actionTypes.EDIT_USER:
            return editUser(state, action);
        case actionTypes.DESTROY_USER:
            return destroyUser(state, action);
        case actionTypes.TOGGLE_USER_ACTIONS:
            return toggleUserActions(state, action);
        default:
            return state;
    }
};

export default reducer;

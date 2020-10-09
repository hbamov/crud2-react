import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import data from "../../helpers/data.json";

const initialState = {
    data: data,
};

const fetchUsers = (state, action) => {
    return updateObject(state, { purchased: "edited" });
};

const createUser = (state, action) => {
    console.log("logging input");

    const userToAdd = { id: Math.floor(Math.random() * 1000), ...action.user };

    console.log(action.user);

    console.log({ data: [...state.data, userToAdd] });

    return updateObject(state, { data: [...state.data, userToAdd] });
};

const destroyUser = (state, action) => {
    const userID = action.userID;
    const updatedUsers = state.data.filter((user) => user.id !== userID);

    return updateObject(state, { data: updatedUsers });
};

const toggleUserActions = (state, action) => {
    console.log(action);
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
        case actionTypes.FETCH_USERS:
            return fetchUsers(state, action);
        case actionTypes.CREATE_USER:
            return createUser(state, action);
        case actionTypes.DESTROY_USER:
            return destroyUser(state, action);
        case actionTypes.TOGGLE_USER_ACTIONS:
            return toggleUserActions(state, action);
        default:
            return state;
    }
};

export default reducer;

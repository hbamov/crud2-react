import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Paper } from "@material-ui/core";

import * as actions from "../store/actions/index";
import EnhancedTable from "../components/Table/EnhancedTable";

class UsersList extends Component {
    render() {
        const { users, onDestroyUser } = this.props;

        return (
            <Paper style={{ width: "100%" }}>
                <EnhancedTable users={users} destroyUser={onDestroyUser} />
            </Paper>
        );
    }
}

UsersList.propTypes = {
    users: PropTypes.array,
    onDestroyUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        users: state.user.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDestroyUser: (userID) => dispatch(actions.destroyUser(userID)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

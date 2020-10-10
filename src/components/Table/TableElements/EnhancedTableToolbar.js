import React from "react";
import PropTypes from "prop-types";

import { Toolbar, Typography, TextField } from "@material-ui/core";

const EnhancedTableToolbar = (props) => {
    const { filterUsers } = props;

    const handleSearch = (event) => {
        let filterValue = event.target.value;

        filterUsers(filterValue);
    };

    return (
        <Toolbar>
            <Typography
                style={{ flex: "1 1 100%" }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Users List
            </Typography>

            <TextField
                variant="outlined"
                label="Search First Name"
                name="search"
                size="small"
                onChange={handleSearch}
            />
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    filterUsers: PropTypes.func.isRequired,
};

export default EnhancedTableToolbar;

import React from "react";
import PropTypes from "prop-types";

import { TextField } from "@material-ui/core";

const Input = (props) => {
    const { name, label, value, error = null, onChange } = props;
    return (
        <TextField
            fullWidth={true}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && { error: true, helperText: error })}
        />
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Input;

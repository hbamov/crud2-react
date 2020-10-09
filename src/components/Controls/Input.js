import React from "react";
import { TextField } from "@material-ui/core";

function Input(props) {
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
}

export default Input;

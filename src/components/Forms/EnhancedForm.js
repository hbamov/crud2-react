import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export const useForm = (initialValues, validateOnChange = false, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
        if (validateOnChange) validate({ [name]: value });
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    };
};

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormControl-root": {
            width: "100%",
            margin: theme.spacing(1),
        },
    },
}));

export const EnhancedForm = (props) => {
    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} {...other}>
            {props.children}
        </form>
    );
};

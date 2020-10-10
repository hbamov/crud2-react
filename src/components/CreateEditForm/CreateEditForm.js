import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Paper, makeStyles, Grid } from "@material-ui/core";

import Controls from "../Controls/index";
import { useForm, Form } from "../useForm";

const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
};

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function CreateEditForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const users = useSelector((state) => state.user.data);

    const { actionToDispatch } = props;

    let { userID } = useParams();

    useEffect(() => {
        let usersToFilter = [...users];

        let editedUser = usersToFilter.find((user) => {
            return user.id === parseInt(userID);
        });

        if (editedUser) {
            setValues(editedUser);
        } else {
            setValues(initialValues);
        }
    }, [userID]);

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        let isValidationSuccess = false;

        for (let key in fieldValues) {
            switch (key) {
                case "first_name":
                case "last_name":
                    temp[key] = fieldValues[key]
                        ? ""
                        : "This field is required. ";
                    break;
                case "email":
                    temp[key] =
                        emailRegex.test(fieldValues[key]) === false
                            ? "Email is not valid"
                            : "";
                    break;
                default:
            }
        }

        setErrors({
            ...temp,
        });

        if (fieldValues === values) {
            isValidationSuccess = Object.values(temp).every((x) => {
                return x === "";
            });
        }

        return isValidationSuccess;
    };

    const { values, setValues, errors, setErrors, handleInputChange } = useForm(
        initialValues,
        true,
        validate
    );

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            dispatch(actionToDispatch(values));

            history.push("/users");
        } else {
            console.log("FAIL");
        }
    };

    const classes = useStyles();

    return (
        <Paper className={classes.pageContent}>
            <Form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={6}>
                        <Controls.Input
                            name="first_name"
                            label="First Name"
                            value={values.first_name}
                            onChange={handleInputChange}
                            error={errors.first_name}
                        />
                        <Controls.Input
                            name="last_name"
                            label="Last Name"
                            value={values.last_name}
                            onChange={handleInputChange}
                            error={errors.last_name}
                        />
                        <Controls.Input
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <Link
                                to="/users"
                                style={{ textDecoration: "none" }}
                            >
                                <Controls.Button text="Back" color="default" />
                            </Link>
                            <Controls.Button text="Save" type="submit" />
                        </div>
                    </Grid>
                </Grid>
            </Form>
        </Paper>
    );
}

export default CreateEditForm;
import * as React from "react";
import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`,
    },
});

const navLinks = [
    { title: `users`, path: `/users` },
    { title: `create user`, path: `/users/create` },
];

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <List
                    component="nav"
                    aria-labelledby="main navigation"
                    className={classes.navDisplayFlex}
                >
                    {navLinks.map(({ title, path }) => (
                        <NavLink
                            exact
                            key={title}
                            activeClassName="active-link"
                            to={path}
                            className={classes.linkText}
                        >
                            <ListItem button>
                                <ListItemText primary={title} />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    );
};
export default Header;

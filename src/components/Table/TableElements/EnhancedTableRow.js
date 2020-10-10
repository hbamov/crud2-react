import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { TableCell, TableRow, Button } from "@material-ui/core";

import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";

const EnhancedTableRow = (props) => {
    const [delayHandler, setDelayHandler] = useState(null);

    const { user, handleDeleteDialogOpen, toggleUserActions } = props;

    const handleMouseEnter = (userID, isHovered) => {
        setDelayHandler(
            setTimeout(() => {
                toggleUserActions(userID, true);
            }, 200)
        );
    };

    const handleMouseLeave = (userID, showActions) => {
        if (showActions === true) {
            toggleUserActions(userID, false);
        }

        clearTimeout(delayHandler);
        setDelayHandler(null);
    };

    const tableCellProps = {
        padding: "none",
        align: "center",
    };

    const buttonStyling = {
        marginRight: "5px",
        marginLeft: "5px",
    };

    const buttonCellProps = {
        size: "small",
        style: { buttonStyling },
        variant: "contained",
    };

    return (
        <TableRow
            hover
            tabIndex={-1}
            onMouseEnter={() => handleMouseEnter(user.id)}
            onMouseLeave={() => handleMouseLeave(user.id, user.showActions)}
            style={{ height: 50 }}
        >
            <TableCell {...tableCellProps} id={user.name} width="20%">
                {user.first_name}
            </TableCell>
            <TableCell {...tableCellProps} width="20%">
                {user.last_name}
            </TableCell>
            <TableCell {...tableCellProps} width="40%">
                {user.email}
            </TableCell>
            {user.showActions ? (
                <TableCell {...tableCellProps} width="20%">
                    <Link
                        to={`/users/edit/${user.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <Button
                            {...buttonCellProps}
                            style={buttonStyling}
                            color="primary"
                            onClick={() =>
                                handleMouseLeave(user.id, user.showActions)
                            }
                            startIcon={<EditIcon />}
                        >
                            Edit
                        </Button>
                    </Link>

                    <Button
                        {...buttonCellProps}
                        style={buttonStyling}
                        color="secondary"
                        onClick={() => handleDeleteDialogOpen(user.id)}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                </TableCell>
            ) : (
                <TableCell {...tableCellProps} width="40%"></TableCell>
            )}
        </TableRow>
    );
};

EnhancedTableRow.propTypes = {
    user: PropTypes.object,
    handleDeleteDialogOpen: PropTypes.func.isRequired,
};

export default EnhancedTableRow;

import React, { useState } from "react";
import PropTypes from "prop-types";

import {
    Table,
    TableBody,
    TableContainer,
    TablePagination,
} from "@material-ui/core";

import * as sortingHelpers from "../../helpers/Sorting";

import EnhancedDialog from "../Controls/Dialog";
import EnhancedTableHead from "./TableElements/EnhancedTableHead";
import EnhancedTableToolbar from "./TableElements/EnhancedTableToolbar";
import EnhancedTableRow from "./TableElements/EnhancedTableRow";

function EnhancedTable(props) {
    const { users, destroyUser } = props;

    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("first_name");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [userToBeDeleted, setUserToBeDeleted] = useState({});

    const [openDialog, setDialogOpen] = useState(false);
    const [usersToDisplay, setUsersToDisplay] = useState(users);

    const handleDeleteDialogOpen = (userID) => {
        const clickedUser = usersToDisplay.find((user) => {
            return user.id === userID;
        });

        setUserToBeDeleted(clickedUser);

        setDialogOpen(true);
    };

    const handleClose = (isConfirmed) => {
        if (isConfirmed === true) {
            destroyUser(userToBeDeleted.id);
        }

        setUserToBeDeleted({});
        setDialogOpen(false);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filterUsers = (filterValue) => {
        let filteredUsers;

        let trimmedValue = filterValue.trim();

        if (trimmedValue.length >= 2) {
            filteredUsers = users.filter((user) => {
                return user.first_name
                    .toLowerCase()
                    .includes(trimmedValue.toLowerCase());
            });
        } else {
            filteredUsers = users.filter((user) => true);
        }

        setUsersToDisplay(filteredUsers);

        return filteredUsers;
    };

    const toggleUserActions = (userID, toggleValue) => {
        let updatedUsers = [...usersToDisplay];

        for (let index = 0; index < updatedUsers.length; index++) {
            let userToUpdate = updatedUsers[index];
            if (userToUpdate.id === userID) {
                userToUpdate.showActions = toggleValue;
            }
        }

        setUsersToDisplay(updatedUsers);
    };

    let currentPageData = sortingHelpers
        .stableSort(
            usersToDisplay,
            sortingHelpers.getComparator(order, orderBy)
        )
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    let dialogContent = `User ${userToBeDeleted.first_name} ${userToBeDeleted.last_name} with email ${userToBeDeleted.email}.`;

    return (
        <>
            <EnhancedTableToolbar filterUsers={filterUsers} />
            <TableContainer>
                <Table
                    aria-labelledby="tableTitle"
                    size="medium"
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <EnhancedDialog
                        open={openDialog}
                        onClose={handleClose}
                        message="Are you sure you want to delete the following user?"
                        content={dialogContent}
                    />
                    <TableBody>
                        {currentPageData.map((user, index) => {
                            return (
                                <EnhancedTableRow
                                    key={user.id}
                                    user={user}
                                    handleDeleteDialogOpen={
                                        handleDeleteDialogOpen
                                    }
                                    toggleUserActions={toggleUserActions}
                                />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, 50]}
                component="div"
                count={usersToDisplay.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </>
    );
}

EnhancedTable.propTypes = {
    users: PropTypes.array.isRequired,
    destroyUser: PropTypes.func.isRequired,
};

export default EnhancedTable;

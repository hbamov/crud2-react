import React from "react";
import PropTypes from "prop-types";

import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    DialogContentText,
} from "@material-ui/core";

const enhancedDialog = (props) => {
    const { open, onClose, message, content } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{message}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose(false)} color="primary">
                    No, Cancel
                </Button>
                <Button onClick={() => onClose(true)} color="primary" autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

enhancedDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default enhancedDialog;

import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertBox = props => {
  const { show, title, message, buttonText, onClose } = props;

  return (
    <Dialog
      open={show}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AlertBox.defaultProps = {
  buttonText: "Tamam"
};

AlertBox.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  buttonText: PropTypes.string
};

export default AlertBox;

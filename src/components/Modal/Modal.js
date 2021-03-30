import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent, Typography,
} from '@material-ui/core';

const Modal = ({
  title, children, openPopup,
}) => (
  <Dialog open={openPopup} maxWidth="md">
    <DialogTitle>
      <Typography variant="h6" component="div">
        <div style={{ fontFamily: 'Montserrat', fontWeight: '900', fontSize: '1rem' }}>{title}</div>
      </Typography>
    </DialogTitle>
    <DialogContent dividers>
      {children}
    </DialogContent>
  </Dialog>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  openPopup: PropTypes.bool.isRequired,
};

export default Modal;

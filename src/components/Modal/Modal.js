/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogContent, Typography,
} from '@material-ui/core';

const Modal = ({
  title, children, openPopup, setOpenPopup, sequenceNo,
}) => (
  <Dialog open={openPopup} maxWidth="md">
    <DialogTitle>
      <Typography variant="h6" component="div">
        <div style={{ color: '#2251FF', fontWeight: '900', fontSize: '1.5rem' }}>{title}</div>
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
  setOpenPopup: PropTypes.func.isRequired,
  sequenceNo: PropTypes.number.isRequired,
};

export default Modal;

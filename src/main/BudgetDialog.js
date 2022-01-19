import React, { useState } from 'react';
import PropTypes from 'prop-types';
//MUI
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/icons/Close';
import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';

import TabBudget from './TabBudget';


//pro style do botão fontFamily: 'Encode Sans Expanded, sans-serif', fontWeight: 'bold'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    let closeImg = {cursor:'pointer', float:'right', marginTop: '5px', width: '20px'};

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                aria-label="close"
                onClick={onClose}
                style={closeImg}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function BudgetDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let colorBg = {
      backgroundColor: '#010606', 
      color: '#fff',
      fontFamily: 'Encode Sans Expanded, sans-serif',
    }

  return (
    <div>
        <Button variant="contained" style={{background: '#01bf71'}} onClick={handleClickOpen}>
            Faça um orçamento preliminar!
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        > 
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={colorBg}>
                Orçamento preliminar de serviço.
            </BootstrapDialogTitle>
            <DialogContent dividers>
            <TabBudget/>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose} style={{ background: '#010606', color: '#fff' }}>
                Finalizar
            </Button>
            </DialogActions>
        </BootstrapDialog>
    </div>
  );
}
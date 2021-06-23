import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Navbar from './components/Navbar';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="app">
      <Navbar />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Testing Vite + React + Material-UI
          </Typography>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Do something
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{'Example'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                test
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Container>
    </div>
  );
}

export default App;

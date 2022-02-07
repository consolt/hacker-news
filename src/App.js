import React from 'react';
import {Grid} from '@mui/material';
import Router from './routes/routes';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
    >
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Grid>
  );
};

export default App;



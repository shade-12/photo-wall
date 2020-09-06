import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Banner from '../components/Banner';
import PhotoContainer from '../components/PhotoContainer';

const useStyles = makeStyles(() => ({
  appContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Box m={4} className={classes.appContainer}>
      <Banner />
      <PhotoContainer />
    </Box>
  );
}

export default App;

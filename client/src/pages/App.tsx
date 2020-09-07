import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Banner from '../components/Banner';
import PhotoContainer from '../components/PhotoContainer';
import UploadButton from '../components/UploadButton';
import { IPhoto } from '../interfaces';
import getPhotos from '../services/getPhotos';

const useStyles = makeStyles(() => ({
  appContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center'
  }
}));

/**
 * Generate a random integer between 1 and @param maxVal, inclusive
 * @param {Number} maxVal The largest possible number that can be generated
 * @return {Number} A random integer between 1 and @param maxVal, inclusive
 */
const getRandomInt = (maxVal: number) :number => {
  return Math.floor(Math.random() * Math.floor(maxVal)) + 1;
};

/**
 * Generate an array of photo data
 * @param {String[]} photoKeys An array of object keys
 * @return {Photo[]} 
 */
const generateTileData = (photoKeys: string[]) :IPhoto[] => {
  return photoKeys.map((key :string) => {
    return {
      src: process.env.REACT_APP_IMG_BASE_URL + key,
      title: key.substring(25),
      cols: getRandomInt(5)
    };
  });
};

function App() {
  const classes = useStyles();
  const [photoArray, setPhotoArray] = useState<IPhoto[] | any[]>([]);

  useEffect(() => fetchLatestPhotos(), []);

  const fetchLatestPhotos = () => {
    getPhotos()
    .then(res => {
      console.log(`getPhotos::success - ${JSON.stringify(res.data, null, 2)}`);
      const tileData = generateTileData(res.data);
      console.log(`generateTileData::info - ${JSON.stringify(tileData, null, 2)}`);
      setPhotoArray(tileData);
    })
    .catch(err => console.log(`getPhotos::error - ${err}`));
  };

  return (
    <Box m={4} className={classes.appContainer}>
      <Banner />
      <UploadButton cb={fetchLatestPhotos} />
      <PhotoContainer photoArray={photoArray} />
    </Box>
  );
}

export default App;

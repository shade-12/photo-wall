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
 * Generate an array of photo data
 * @param {String[]} photoKeys An array of object keys
 * @return {Photo[]} 
 */
const generateTileData = (photoKeys: string[]) :IPhoto[] => {
  return photoKeys.map((key :string) => {
    return {
      src: process.env.REACT_APP_IMG_BASE_URL + key,
      title: key.substring(25)
    };
  });
};

function App() {
  const classes = useStyles();
  const [photoArray, setPhotoArray] = useState<IPhoto[] | any[]>([]);
  const [rearrange, setRearrange] = useState<boolean>(false);

  useEffect(() => fetchLatestPhotos(), []);

  const fetchLatestPhotos = () => {
    getPhotos()
    .then(res => {
      if (process.env.NODE_ENV !== 'production')
        console.log(`getPhotos::success - ${JSON.stringify(res.data, null, 2)}`);
      const tileData = generateTileData(res.data);
      if (process.env.NODE_ENV !== 'production')
        console.log(`generateTileData::info - ${JSON.stringify(tileData, null, 2)}`);
      setPhotoArray(tileData);
      setRearrange(true);
    })
    .catch(err => console.log(`getPhotos::error - ${err}`));
  };

  const updatePhotoArray = (fileUrl: string) => {
    const newPhoto = {
      src: fileUrl,
      title: fileUrl.substring(80)
    };
    if (process.env.NODE_ENV !== 'production')
      console.log(`updatePhotoArray::info - ${JSON.stringify(newPhoto, null, 2)}`);
    setPhotoArray(prevArr => [newPhoto].concat(prevArr));
    setRearrange(true);
  };

  const startRearrange = () => {
    console.log(`startRearrange::info - running...`);
    setRearrange(true);
  };

  const doneRearrange = () => {
    console.log(`doneRearrange::info - done.`);
    setRearrange(false);
  };

  return (
    <Box m={4} className={classes.appContainer}>
      <Banner />
      <UploadButton cb={updatePhotoArray} startRearrange={startRearrange} />
      <PhotoContainer photoArray={photoArray} rearrange={rearrange} doneRearrange={doneRearrange} />
    </Box>
  );
}

export default App;

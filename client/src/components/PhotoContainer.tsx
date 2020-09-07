import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { IPhoto } from '../interfaces';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
        }
    })
);

interface IPhotoContainerProps {
    photoArray: IPhoto[]
};

function PhotoContainer(props: IPhotoContainerProps) {
    const classes = useStyles();
    const { photoArray } = props;

	return (
		<Box className={classes.root}>
            <GridList cellHeight={300} spacing={8} cols={5}>
                {photoArray.map((tile) => (
                    <GridListTile key={tile.src} cols={tile.cols || 1}>
                        <img src={tile.src} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </Box>
	);
}

export default PhotoContainer;
import React, { useCallback, useEffect, useState } from 'react';
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
    photoArray: IPhoto[],
    rearrange: boolean,
    doneRearrange: Function
};

const MAX_COLS = 5;

/**
 * Generate a random integer between 1 and @param maxVal, inclusive
 * @param {Number} maxVal The largest possible number that can be generated
 * @return {Number} A random integer between 1 and @param maxVal, inclusive
 */
const getRandomInt = (maxVal: number) :number => {
  return Math.floor(Math.random() * Math.floor(maxVal)) + 1;
};

function PhotoContainer(props: IPhotoContainerProps) {
    const classes = useStyles();
    const { photoArray, rearrange, doneRearrange } = props;
    const [tiles, setTiles] = useState<typeof GridListTile[] | any[]>([]);

    const rearrangeTiles = useCallback(() => {
        if (process.env.NODE_ENV !== 'production')
            console.log(`rearrangeTiles::info - running...`);
        let availableCols: number = MAX_COLS;
        const arrangedTiles = photoArray.map((tile) => {
            let cols: number = Math.min(getRandomInt(MAX_COLS), availableCols);
            if (cols < availableCols)
                availableCols -= cols;
            else
                availableCols = MAX_COLS;
            return  <GridListTile key={tile.src} cols={cols}>
                        <img src={tile.src} alt={tile.title} />
                    </GridListTile>
        });
        setTiles(arrangedTiles);
        doneRearrange();
    }, [doneRearrange, photoArray]);

    useEffect(() => {
        if (rearrange)
            rearrangeTiles();
    }, [rearrange, rearrangeTiles]);

	return (
		<Box className={classes.root}>
            <GridList cellHeight={300} spacing={8} cols={MAX_COLS}>
                {tiles}
            </GridList>
        </Box>
	);
}

export default PhotoContainer;
import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import uploadPhoto from '../services/uploadPhoto';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            overflow: 'hidden'
        },
        button: {
            textTransform: 'none'
        },
        input: {
            display: 'none'
        }
    })
);

const isValidFileFormat = (type: string) :boolean => {
    const validFormat = ["image/jpeg", "image/jpg", "image/png", "image/svg", "image/gif"];
    return validFormat.includes(type);
};

const maxFileSize = 5000000; // 5MB

function UploadButton() {
    const classes = useStyles();
    
    const uploadImage = (event: any) => {
        if (event.target.files.length < 1)
            alert('Please select a photo to upload.');
        if (event.target.files.length > 1)
            alert('Please upload one photo at a time.');
        if(event.target.files[0].size > maxFileSize)
            alert('Please upload a photo smaller than 5 MB.');
        if(!isValidFileFormat(event.target.files[0].type))
            alert('Only JPG, PNG, GIF and SVG photos are supported at this time.');

        uploadPhoto(event.target.files[0])
        .then(res => console.log(`uploadPhoto::success - ${res}`))
        .catch(err => console.log(`uploadPhoto::error - ${err}`));
    };

	return (
		<Box m={3} className={classes.root}>
            <input 
                accept="image/*" 
                className={classes.input}
                type="file" 
                id="upload-photo"
                onChange={uploadImage}
            />
            <label htmlFor="upload-photo">
                <Typography variant="h6">
                    <Button
                        variant="contained"
                        component="span"
                        color="secondary"
                        startIcon={<PhotoCameraIcon />}
                        className={classes.button}
                    >
                        <b>Upload photo</b>
                    </Button>
                </Typography>
            </label>
        </Box>
	);
}

export default UploadButton;
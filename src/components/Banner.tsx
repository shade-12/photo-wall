import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import githubAvatar from '../assets/github-avatar.svg';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#f4acb7',
		color: '#355070'
	},
	avatar: {
		height: '12vw',
        width: '12vw',
        margin: '1rem'
	}
}));

function Banner() {
	const classes = useStyles();

	return (
		<Grid container direction="column" justify="center" className={classes.root}>
			<Grid container justify="center" item xs={12}>
				<Avatar alt="github-avatar" src={githubAvatar} className={classes.avatar} />
			</Grid>
			<Grid container justify="center" item xs={12}>
				<Typography variant="h5" paragraph><b>Welcome to My Photo Wall</b></Typography>
			</Grid>
		</Grid>
	);
}

export default Banner;

import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import githubAvatar from '../assets/github-avatar.svg';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.primary.dark,
		color: theme.palette.primary.contrastText,
		padding: '1rem'
	},
	avatar: {
		height: '15vw',
        width: '15vw',
        margin: '1rem'
	},
	chipContainer: {
		'& > *': {
			margin: theme.spacing(0.5)
		}
	},
	gridItem: {
		width: 'fit-content'
	}
}));

function Banner() {
	const classes = useStyles();

	return (
		<Grid container direction="row" alignContent="center" className={classes.root}>
			<Grid item className={classes.gridItem}>
				<Avatar alt="github-avatar" src={githubAvatar} className={classes.avatar} />
			</Grid>
			<Grid item container direction="column" className={classes.gridItem} style={{ margin: '1rem' }}>
				<Typography variant="h4" gutterBottom><b>Shade Wong</b></Typography>
				<Grid item container className={classes.chipContainer}>
					<Chip label="University of British Columbia" color="primary" />
					<Chip label="BASc Computer Engineering" color="secondary" />
					<Chip label="AWS Certified Developer - Associate" color="primary" />
				</Grid>
				<br />
				<Typography variant="h6" gutterBottom><b>Connect with me</b></Typography>
				<Grid item container className={classes.chipContainer}>
					<Chip 
						label="Github"
						clickable
						color="secondary"
						icon={<GitHubIcon fontSize="small" />}
						component="a"
						href="https://github.com/shade-12"
						target="_blank"
					/>
					<Chip
						label="LinkedIn"
						clickable
						color="primary"
						icon={<LinkedInIcon fontSize="small" />}
						component="a"
						href="https://www.linkedin.com/in/shade-wong-ab4a91192/"
						target="_blank"
					/>
				</Grid>
			</Grid>
			
		</Grid>
	);
}

export default Banner;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Colors from '../colors/colors.js';
import '../App.js';
import MyLogo from '../logo.png';
import { Grid, Box } from '@mui/material';

function HideOnScroll(props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

export default function HideAppBar(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar style={{ boxShadow: 'none', background: 'transparent' }}>
					<Toolbar style={{ background: 'transparent', boxShadow: 'none' }}>
						<img src={MyLogo} alt='justinnas' height='90' />
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}

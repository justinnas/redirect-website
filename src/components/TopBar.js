import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import '../App.js';
import MyLogo from '../t7lt_icon.png';

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
					<Toolbar
						style={{
							background: 'transparent',
							boxShadow: 'none',
							marginBottom: '20vh',
							padding: '2%',
							paddingLeft: '3%',
						}}
					>
						<img src={MyLogo} alt='justinnas' width='8%' />
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
}

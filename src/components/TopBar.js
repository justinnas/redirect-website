import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import '../App.js';
import MyLogo from '../t7lt_icon.png';

export default function HideAppBar(props) {
	return (
		<AppBar position='static' style={{ boxShadow: 'none', background: 'transparent' }}>
			<Toolbar
				style={{
					background: 'transparent',
					boxShadow: 'none',
					marginBottom: '17vh',
					padding: '2%',
					paddingLeft: '4%',
				}}
			>
				<img src={MyLogo} alt='t7.lt' width='8%' />
			</Toolbar>
		</AppBar>
	);
}

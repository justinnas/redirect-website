import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box } from '@mui/material';
import './ContactSites.css';
import noise from './noise.svg';
import Colors from '../../colors/colors.js';
import React, { useState } from 'react';

const openGithub = () => {
	window.open('https://github.com/justinnas', '_blank');
};

const ContactSites = () => {
	const [isEmailShown, setIsEmailShown] = useState(false);

	const toggleEmailVisibility = () => {
		setIsEmailShown(!isEmailShown);
	};

	return (
		<Box
			style={{
				padding: '10px',
				display: 'flex',
				textAlign: 'center',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box className='logo-box' onClick={openGithub}>
				<GitHubIcon className='logo' />
			</Box>
			<Box className={`logo-box ${isEmailShown ? 'extended' : ''}`}>
				<MailOutlineIcon className='logo' onClick={toggleEmailVisibility} />
				<span className='email-text'>devjustinas@gmail.com</span>
			</Box>
		</Box>
	);
};

export default ContactSites;

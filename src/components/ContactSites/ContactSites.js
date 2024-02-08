import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box } from '@mui/material';
import './ContactSites.css';
import noise from './noise.svg';
import Colors from '../../colors/colors.js';
import React, { useState } from 'react';

const openGithub = () => {
	window.open('https://github.com/justinnas', '_blank');
};

export default function ContactSites() {
	const [isEmailShown, setIsEmailShown] = useState(false);

	const toggleEmailVisibility = () => {
		setIsEmailShown(!isEmailShown);
	};

	return (
		<Box
			style={{
				padding: '10px',
				display: 'flex',
				background: `-webkit-linear-gradient(left, 
					rgba(178,40,255,0.5) 0%, 
					rgba(37,208,253,0.5) 40%, 
					${Colors.mainBackground} 100%
				),url(${noise})`,
				width: '400px',
			}}
		>
			<Box className='logo-box' onClick={openGithub}>
				<GitHubIcon className='logo' />
			</Box>
			{/* <LinkedInIcon onClick={openGithub} className='logo' />
			<InstagramIcon onClick={openGithub} className='logo' /> */}
			<Box className={`logo-box ${isEmailShown ? 'extended' : ''}`}>
				<MailOutlineIcon className='logo' onClick={toggleEmailVisibility} />
				<span className='email-text'>devjustinas@gmail.com</span>
			</Box>
		</Box>
	);
}

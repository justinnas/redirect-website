import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box } from '@mui/material';
import './ContactSites.css';

const openGithub = () => {
	window.open('https://github.com/justinnas', '_blank');
};

export default function ContactSites() {
	return (
		<Box>
			<GitHubIcon onClick={openGithub} className='logo' />
			<LinkedInIcon onClick={openGithub} className='logo' />
			<InstagramIcon onClick={openGithub} className='logo' />
			<MailOutlineIcon onClick={openGithub} className='logo' />
		</Box>
	);
}

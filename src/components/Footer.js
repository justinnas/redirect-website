import { Typography, Container, Box, Grid } from '@mui/material';
const Footer = () => {
	return (
		<Box style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', padding: '3em' }}>
			<p style={{ fontWeight: '100' }}>© {new Date().getFullYear()} justinnas</p>
		</Box>
	);
};

export default Footer;

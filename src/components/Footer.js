import { Box } from '@mui/material';
const Footer = () => {
	return (
		<Box style={{ alignItems: 'center', justifyContent: 'center', padding: '3em', textAlign: 'center' }}>
			<p style={{ fontWeight: '100' }}>
				Website is under development. <br />
			</p>
			<p style={{ fontWeight: '100' }}>© {new Date().getFullYear()} justinnas</p>
		</Box>
	);
};

export default Footer;

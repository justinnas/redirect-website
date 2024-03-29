import { Box, Typography } from '@mui/material';
const Footer = () => {
	return (
		<Box
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				padding: '3em',
				textAlign: 'center',
			}}
		>
			<Typography
				style={{ fontWeight: '100', fontFamily: 'Poppins', fontSize: { xl: '1.7rem', md: '0.2rem', xs: '0.2rem' } }}
			>
				© {new Date().getFullYear()} justinnas
			</Typography>
		</Box>
	);
};

export default Footer;

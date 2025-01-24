import { Box, Typography, Link } from '@mui/material';
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
			<Link
				href='https://github.com/justinnas'
				underline='none'
				target='_blank'
				rel='noreferrer'
				sx={{
					color: '#ffffff',
					'&:hover': {
						textShadow: '0 0 10px #ffffff',
					},
				}}
			>
				<Typography
					style={{ fontWeight: '100', fontFamily: 'Poppins', fontSize: { xl: '1.7rem', md: '0.2rem', xs: '0.2rem' } }}
				>
					© {new Date().getFullYear()} justinnas
				</Typography>
			</Link>
		</Box>
	);
};

export default Footer;

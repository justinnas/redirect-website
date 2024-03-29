import { Typography, Container, Box, Grid } from '@mui/material';
import TitleAnimation from './TitleAnimation/TitleAnimation.js';
import '../App.css';
import ContactSites from './ContactSites/ContactSites.js';
import Justinnas_logo from './Justinnas_logo.png';
import MyLogo from '../t7lt_icon.png';

export default function PageContents() {
	return (
		<Container maxWidth='lg'>
			<Grid container alignItems='center' justifyContent='center' overflow='hidden' spacing={5}>
				<Grid item xl={6} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Box
						style={{
							overflow: 'visible',
							alignItems: 'center',
							justifyContent: 'center',
							width: '90vw',
							textAlign: 'center',
						}}
					>
						<img src={MyLogo} alt='t7.lt' width='50%' />
						<Typography
							sx={{
								fontSize: { xl: '1.7rem', md: '1rem', xs: '1rem' },
								fontWeight: '100',
								fontFamily: 'Poppins',
							}}
						>
							Under development.
						</Typography>
						<Typography
							sx={{
								marginTop: '1em',
								whiteSpace: 'nowrap',
								fontFamily: 'Poppins',
								fontSize: { xl: '2.5rem', md: '1.5rem' },
								fontWeight: '900',
							}}
						></Typography>
						<Box
							sx={{
								scale: { xl: '1', md: '0.7', xs: '0.7' },
							}}
						>
							<ContactSites />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

import { Typography, Container, Box, Grid } from '@mui/material';
import TitleAnimation from './TitleAnimation/TitleAnimation.js';
import '../App.css';
import Colors from '../colors/colors.js';
import ContactSites from './ContactSites/ContactSites.js';
import Spline from '@splinetool/react-spline';

export default function PageContents() {
	return (
		<Container maxWidth='lg'>
			<Grid
				container
				alignItems='center'
				justifyContent='center'
				overflow='hidden'
				style={{ minHeight: '80vh' }}
				spacing={5}
			>
				<Grid item xl={6} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Box
						style={{
							overflow: 'visible',
							alignItems: 'center',
							justifyContent: 'center',
							width: '50vw',
						}}
					>
						<Typography
							sx={{
								fontSize: { xl: '2.5rem', md: '1rem', xs: '0.6rem' },
								fontWeight: '100',
								fontFamily: 'Poppins',
							}}
						>
							Hello, I'm
						</Typography>
						<Typography sx={{ fontSize: { xl: '4rem', md: '2.5rem' }, fontWeight: '900', fontFamily: 'Poppins' }}>
							JUSTINAS;
						</Typography>
						<Typography
							sx={{
								marginTop: '1em',
								whiteSpace: 'nowrap',
								fontFamily: 'Poppins',
								fontSize: { xl: '2.5rem', md: '1.5rem' },
								fontWeight: '900',
							}}
						>
							<Grid container>
								<Grid item xl={3.4} md={12} xs={12}>
									Need a
								</Grid>
								<Grid
									item
									xl={8.6}
									md={12}
									sx={{
										fontSize: { xl: '2.5rem', md: '1.5rem' },
										fontWeight: '900',
									}}
								>
									<TitleAnimation />?
								</Grid>
							</Grid>
						</Typography>
						<Box
							sx={{
								scale: { xl: '1', md: '0.6', xs: '0.5' },
								marginLeft: { xl: '0', md: '-25%', xs: '-33%' },
							}}
						>
							<ContactSites />
						</Box>
					</Box>
				</Grid>
				<Grid item xl={6} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Box
						style={{
							zIndex: '5',
						}}
					>
						<Spline scene='https://prod.spline.design/0II-GlA-x7RnDXuK/scene.splinecode' />
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

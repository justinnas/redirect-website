import { Typography, Container, Box, Grid } from '@mui/material';
import TitleAnimation from './TitleAnimation/TitleAnimation.js';
import '../App.css';
import Colors from '../colors/colors.js';
import ContactSites from './ContactSites/ContactSites.js';
import Spline from '@splinetool/react-spline';

export default function PageContents() {
	return (
		<Container maxWidth='xl'>
			<Grid
				container
				alignItems='center'
				justifyContent='center'
				overflow='hidden'
				style={{ minHeight: '80vh' }}
				spacing={5}
			>
				<Grid item xl={6} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Box style={{ overflow: 'visible', alignItems: 'center', justifyContent: 'center', width: '500px' }}>
						<p style={{ fontWeight: '100', fontSize: '2.5em', marginBottom: '-10px' }}>Hello, I'm</p>
						<p style={{ fontWeight: '900', fontSize: '4em' }}>JUSTINAS;</p>
						<p style={{ fontWeight: '700', fontSize: '2.5em', marginTop: '1em', whiteSpace: 'nowrap' }}>
							<Grid container>
								<Grid item xl={3.7} md={12}>
									Need a
								</Grid>
								<Grid item xl={8.3} md={12}>
									<TitleAnimation />?
								</Grid>
							</Grid>
						</p>
						<ContactSites />
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

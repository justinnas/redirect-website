import { Typography, Container, Box, Grid } from '@mui/material';
import TitleAnimation from './TitleAnimation/TitleAnimation.js';
import '../App.css';
import Colors from '../colors/colors.js';
import ContactSites from './ContactSites/ContactSites.js';

export default function PageContents() {
	return (
		<Container style={{ paddingTop: '12%', backgroundColor: Colors.mainBackground }}>
			<p style={{ fontWeight: '100', fontSize: '2.5em', marginBottom: '-10px' }}>Hello, I'm</p>
			<p style={{ fontWeight: '900', fontSize: '4em' }}>JUSTINAS;</p>
			<p style={{ fontWeight: '700', fontSize: '2.5em', marginTop: '1em' }}>
				Need a <TitleAnimation />?
			</p>
			<ContactSites />
		</Container>
	);
}

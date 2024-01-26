import { Typography, Container } from '@mui/material';
import TitleAnimation from './TitleAnimation/TitleAnimation.js';
import '../App.js';
import Colors from '../colors/colors.js';
import ContactSites from './ContactSites/ContactSites.js';

export default function PageContents() {
	return (
		<Container style={{ paddingTop: '15%', backgroundColor: Colors.mainBackground }}>
			<p style={{ fontWeight: '100', fontSize: '2.5em' }}>Hello, I'm</p>
			<p style={{ fontWeight: '900', fontSize: '4em' }}>JUSTINAS;</p>
			<p style={{ fontWeight: '700', fontSize: '2.5em', marginTop: '1em' }}>
				Need a <TitleAnimation />?
			</p>
			{/* <p style={{ fontWeight: '700', fontSize: '1.5em', marginTop: '1em' }}>Contact Me</p> */}
			<ContactSites />
		</Container>
	);
}

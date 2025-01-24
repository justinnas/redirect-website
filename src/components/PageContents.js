import { Box } from '@mui/material';
import '../App.css';
import PageLogo from '../t7lt_icon.png';
import Footer from './Footer';

export default function PageContents() {
	return (
		<Box
			style={{
				minHeight: '100vh',
				minWidth: '100vw',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				style={{
					overflow: 'visible',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
				}}
			>
				<img src={PageLogo} alt='t7.lt' width='200px' />
			</Box>
			<Footer />
		</Box>
	);
}

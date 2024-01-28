import { Typography, Container, Box, Grid } from '@mui/material';
import '../../App.css';
import Colors from '../../colors/colors.js';
import noise from '../ContactSites/noise.svg';
import './ProjectPageStyles.css';

const boxStyles = {
	display: 'flex',
	border: `1px solid ${Colors.mainTextColor}`,
	marginBottom: '2em',
	borderRadius: '1em',
};

const Projects = () => {
	return (
		<Container>
			<p className='page-title'>Projects</p>
			<Box
				style={{
					...boxStyles,
					background: `-webkit-linear-gradient(right,
						rgba(255, 204, 112,0.5) 0%,  
						rgba(200, 80, 192,0.5) 20%, 
						rgba(65, 88, 208,0.5) 50%, 
						${Colors.mainBackground} 80%
					),url(${noise})`,
				}}
			>
				<Grid container>
					<Grid item xs={6}>
						<Grid container alignItems='center' padding='1.5em'>
							<Grid item xs={12} paddingBottom='1em'>
								<span className='project-title'>Portfolio website</span>
								<span className='project-year'> 2024</span>
							</Grid>
							<Grid item>
								{' '}
								<span className='project-desc'>The website you're currently on. Developed from scratch.</span>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6}>
						{/* <div
							style={{
								display: 'flex',
								justifyContent: 'right',
								alignItems: 'right',
								overflow: 'hidden',
								height: 150,
							}}
						>
							<img
								src='https://images.unsplash.com/photo-1669411293006-caae7b935599?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='pic'
								style={{ border: `1px solid ${Colors.mainTextColor}` }}
							/>
						</div> */}
					</Grid>
				</Grid>
			</Box>
			<Box
				style={{
					...boxStyles,
					background: `-webkit-linear-gradient(right, 
            rgba(52, 205, 235,0.5) 0%,  
            ${Colors.mainBackground} 70%
          ), url(${noise})`,
				}}
			>
				<Grid container>
					<Grid item xs={6}>
						<Grid container alignItems='center' padding='1.5em'>
							<Grid item xs={12} paddingBottom='1em'>
								<span className='project-title'>Office Issue Registration System</span>
								<span className='project-year'> 2023</span>
							</Grid>
							<Grid item>
								{' '}
								<span className='project-desc'>
									Developed during internship in [REDACTED] in a team of 6 developers over a two-month period.
								</span>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			</Box>
			<Box
				style={{
					...boxStyles,
					background: `-webkit-linear-gradient(right, 
            rgba(30,215,78,0.5) 0%,  
            ${Colors.mainBackground} 70%
          ), url(${noise})`,
				}}
			>
				<Grid container>
					<Grid item xs={6}>
						<Grid container alignItems='center' padding='1.5em'>
							<Grid item xs={12} paddingBottom='1em'>
								<span className='project-title'>StarTray Battery</span>
								<span className='project-year'> 2024</span>
							</Grid>
							<Grid item>
								{' '}
								<span className='project-desc'>
									COMING SOON! Modern, lightweight application for displaying your device's battery percentage icon in
									the System's Icon Tray.
								</span>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			</Box>
			<Box
				style={{
					...boxStyles,
					background: `-webkit-linear-gradient(right, 
            rgba(156, 52, 235,0.5) 0%,  
            ${Colors.mainBackground} 70%
          ), url(${noise})`,
				}}
			>
				<Grid container>
					<Grid item xs={6}>
						<Grid container alignItems='center' padding='1.5em'>
							<Grid item xs={12} paddingBottom='1em'>
								<span className='project-title'>StarTray Temperatures</span>
								<span className='project-year'> TBA</span>
							</Grid>
							<Grid item>
								{' '}
								<span className='project-desc'>
									Under development. Modern, lightweight application for displaying your device's GPU and CPU
									temperatures icons in the System's Icon Tray.
								</span>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6}></Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default Projects;

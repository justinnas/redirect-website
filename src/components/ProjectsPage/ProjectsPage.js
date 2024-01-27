import { Typography, Container, Box, Grid } from '@mui/material';
import '../../App.css';
import Colors from '../../colors/colors.js';
import noise from '../ContactSites/noise.svg';
import './ProjectPageStyles.css';

const boxStyles = {
	width: '50%',
	display: 'flex',
	// border: `1px solid ${Colors.mainTextColor}`,
	// 	background: `-webkit-linear-gradient(right,
	// 	rgba(1,142,196,0.5) 0%,
	// 	${Colors.mainBackground} 70%,
	// 	${Colors.mainBackground} 100%
	// ),url(${noise})`,
};

const Projects = () => {
	return (
		<Container>
			<p className='page-title'>Projects</p>
			<div class='parent'>
				<div class='div1 grid-item'>
					<div>
						<img
							src='https://images.unsplash.com/photo-1669411293006-caae7b935599?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt='pic'
							className='grid-item-image'
						/>
					</div>
				</div>
				<div class='div2 grid-item' style={{ backgroundColor: 'white', color: 'black' }}>
					<span className='project-title'>Portfolio website</span>
				</div>
				<div class='div3 grid-item'>
					<span className='project-year'> 2024</span>
				</div>
				<div class='div4 grid-item'>
					<span className='project-desc'>
						The website you're currently on. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</span>
				</div>
			</div>
		</Container>
	);
};

export default Projects;

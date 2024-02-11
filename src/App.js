import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import PageContents from './components/PageContents';
import Footer from './components/Footer';
import Colors from './colors/colors';
import { Box } from '@mui/material';
import Projects from './components/ProjectsPage/Projects';

function App() {
	return (
		<div className='App' style={{ backgroundColor: Colors.mainBackground }}>
			<Box sx={{ minHeight: { xl: '100vh', xs: '50vh' } }}>
				<TopBar />
				<PageContents />
			</Box>
			<Box sx={{ minHeight: { xl: '100vh', xs: '50vh' }, paddingTop: '10vh' }}>
				<Projects />
			</Box>
			<Footer />
		</div>
	);
}

export default App;

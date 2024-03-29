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
			<Box sx={{ minHeight: '65vh', paddingTop: '35vh' }}>
				<PageContents />
			</Box>
		</div>
	);
}

export default App;

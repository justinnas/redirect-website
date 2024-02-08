import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import PageContents from './components/PageContents';
import Footer from './components/Footer';
import Colors from './colors/colors';
import Projects from './components/ProjectsPage/Projects';
import { Box } from '@mui/material';
import AnimatedCursor from 'react-animated-cursor';
import LoadingPage from './components/LoadingPage/LoadingPage.js';

function App() {
	return (
		<div className='App' style={{ backgroundColor: Colors.mainBackground }}>
			<LoadingPage />
			<AnimatedCursor
				innerSize={8}
				outerSize={35}
				innerScale={1}
				outerScale={2}
				outerAlpha={0}
				hasBlendMode={true}
				innerStyle={{
					backgroundColor: 'white',
				}}
				outerStyle={{
					border: '3px solid white',
				}}
			/>

			<TopBar />
			<Box minHeight='100vh'>
				<PageContents />
			</Box>
			{/* <Box minHeight='70vh'>
				<Projects />
			</Box> */}
			<Footer />
		</div>
	);
}

export default App;

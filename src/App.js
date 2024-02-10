import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import PageContents from './components/PageContents';
import Footer from './components/Footer';
import Colors from './colors/colors';
import { Box } from '@mui/material';
import LoadingPage from './components/LoadingPage/LoadingPage.js';
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
	return (
		<div className='App' style={{ backgroundColor: Colors.mainBackground }}>
			<Box height='100vh'>
				<TopBar />
				<PageContents />
			</Box>
			<Footer />
		</div>
	);
}

export default App;

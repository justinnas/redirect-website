import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import PageContents from './components/PageContents';
import Footer from './components/Footer';
import Colors from './colors/colors';
import { Box } from '@mui/material';
import LoadingPage from './components/LoadingPage/LoadingPage.js';

function App() {
	return (
		<div className='App' style={{ backgroundColor: Colors.mainBackground }}>
			<LoadingPage />

			<TopBar />
			<Box minHeight='100vh'>
				<PageContents />
			</Box>

			<Footer />
		</div>
	);
}

export default App;

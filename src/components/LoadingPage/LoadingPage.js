import React, { useState, useEffect } from 'react';
import './LoadingPage.css';
import MyLogo from '../../logo.png';

const LoadingPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isNotLoaded, setIsNotLoaded] = useState(true);

	useEffect(() => {
		const loadingTimeOut = () => {
			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
		};
		const isNotLoadedTimeOut = () => {
			setTimeout(() => {
				setIsNotLoaded(false);
			}, 3000);
		};
		loadingTimeOut();
		isNotLoadedTimeOut();
	}, []);

	return (
		isNotLoaded && (
			<div className={`loader ${isLoading ? 'visible' : 'hidden'}`}>
				<div>
					<img src={MyLogo} alt='justinnas' height='90' className='rotate' />
				</div>
			</div>
		)
	);
};

export default LoadingPage;

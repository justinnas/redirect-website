import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import '../App.css';

const TEXTS = ['Web Developer', 'Software Developer', 'Graphic Designer'];

const TextSwitcher = () => {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<Typography variant='h5' color='green'>
			Need a{' '}
			<TextTransition springConfig={presets.wobbly} inline>
				{TEXTS[index % TEXTS.length]}
			</TextTransition>{' '}
			?
		</Typography>
	);
};

export default TextSwitcher;

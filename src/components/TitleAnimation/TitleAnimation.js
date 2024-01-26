import { TypeAnimation } from 'react-type-animation';
import React, { useState } from 'react';

const TitleAnimation = () => {
	const [gradient, setGradient] = useState('');

	return (
		<span
			style={{
				color: 'white',
				backgroundColor: '#f3ec78',
				backgroundImage: gradient,
				backgroundSize: '100%',
				WebkitBackgroundClip: 'text',
				MozBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				MozTextFillColor: 'transparent',
				fontWeight: '900',
			}}
		>
			<TypeAnimation
				sequence={[
					() => setGradient('linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'),
					'WEB DEVELOPER',
					2000,
					'',
					100,
					() => setGradient('linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'),
					'SOFTWARE DEVELOPER',
					2000,
					'',
					100,
					() => setGradient('linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)'),
					'GRAPHIC DESIGNER',
					2000,
					'',
					100,
				]}
				wrapper='span'
				speed={50}
				repeat={Infinity}
			/>
		</span>
	);
};

export default TitleAnimation;

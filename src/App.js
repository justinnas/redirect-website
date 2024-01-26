import './App.css';
import TopBar from './components/TopBar';
import PageContents from './components/PageContents';
import Colors from './colors/colors';

function App() {
	return (
		<div className='App' style={{ backgroundColor: Colors.mainBackground }}>
			<TopBar />
			<div>
				<PageContents />
			</div>
		</div>
	);
}

export default App;

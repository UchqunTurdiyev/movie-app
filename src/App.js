import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Hero } from './component';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
			</Routes>
		</>
	);
}

export default App;

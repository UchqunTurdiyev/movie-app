import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, Home } from './component';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;

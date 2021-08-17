import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes/routes';
import Circulos from './components/Circulos';

function App() {
	return (
		<Router>
			<Circulos />
			<Route path="/" component={Routes} />
		</Router>
	);
}

export default App;

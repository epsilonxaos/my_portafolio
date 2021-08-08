import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes/routes';

function App() {
	return (
		<Router>
			<Route path="/" component={Routes} />
		</Router>
	);
}

export default App;

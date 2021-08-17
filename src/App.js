import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Circulos from './components/Circulos';
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
	return (
		<Router>
			<Circulos />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="*" component={Error} />
			</Switch>
		</Router>
	);
}

export default App;

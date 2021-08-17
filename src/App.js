import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Circulos from './components/Circulos';
import Home from "./pages/Home";
import Error from "./pages/Error";
import ScrollHandler from './components/ScrollHandler';

function App() {
	return (
		<Router>
			<ScrollHandler />
			<Circulos />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/home" exact component={Home} />
				<Route path="*" component={Error} />
			</Switch>
		</Router>
	);
}

export default App;

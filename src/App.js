import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './web/Home';
import Portafolio from './web/Portafolio';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/portafolio">
					<Portafolio />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

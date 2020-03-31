import 'bootswatch/dist/litera/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Users } from './components/Users';

function App() {
	return (
		<Router>
			<NavBar />
			<div className="container p-4">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/users" component={Users} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

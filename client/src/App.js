import React from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
		<Provider store={store}>
			<div className="App">
				<AppNavbar />
				<h1>herro prease</h1>
				<ShoppingList />

			</div>
		</Provider>
  );
}

export default App;

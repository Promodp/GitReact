
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
//import RepoDetails from './components/RepoDetails';
import { store } from './store';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById( 'root' )
);

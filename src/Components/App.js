import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { ToastContainer } from 'react-toastify';
import Home from './Home/index';

class App extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Route path="/" component={Home} />
                </Router>
                <ToastContainer
                />
            </div>
        );
    }
}

export default App;
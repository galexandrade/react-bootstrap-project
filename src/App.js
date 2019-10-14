//@flow
import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/page1">Page 1</Link>
                        </li>
                        <li>
                            <Link to="/page2">Page 2</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/page1">
                        <Page1 />
                    </Route>
                    <Route path="/page2">
                        <Page2 />
                    </Route>
                    <Route path="/">
                        <Redirect to="/page1" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;

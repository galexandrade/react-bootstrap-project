//@flow
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SideMenu from './components/SideMenu/SideMenu';
import Header from './components/Header/Header';
import Routes from './Routes';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    }
}));

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
                <Header onOpenMenu={toggleMenu} />
                <Routes />
            </div>
        </Router>
    );
};

export default App;

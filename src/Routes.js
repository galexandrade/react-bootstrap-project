//@flow
import React from 'react';
import { pages } from './utils/navigation';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Page1 from './pages/Page1/Page1';
import { Container } from '@material-ui/core';

const Routes = () => (
    <Container>
        <Switch>
            <Route path={pages.home}>
                <Home />
            </Route>
            <Route path={pages.page1}>
                <Page1 />
            </Route>
            <Route path="/">
                <Redirect to={pages.home} />
            </Route>
        </Switch>
    </Container>
);

export default Routes;

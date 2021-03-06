import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import asyncComponent from './Utilities/asyncComponent';

const SamplePage = asyncComponent(() => import(/* webpackChunkName: "SamplePage" */ './SmartComponents/SamplePage/SamplePage'));
const paths = {
    samplepage: '/email'
};

const InsightsRoute = ({ component: Component, rootClass, ...rest }) => {
    const root = document.getElementById('root');
    root.removeAttribute('class');
    root.classList.add(`page__${rootClass}`, 'pf-c-page__main');
    root.setAttribute('role', 'main');

    return (<Route { ...rest } component={ Component } />);
};

InsightsRoute.propTypes = {
    component: PropTypes.func,
    rootClass: PropTypes.string
};

export const Routes = () => {
    return (
        <Switch>
            <InsightsRoute path={ paths.email } component={ SamplePage } rootClass='samplepage'/>

            { /* Finally, catch all unmatched routes */ }
            <Redirect path='*' to={ paths.email } push />
        </Switch>
    );
};

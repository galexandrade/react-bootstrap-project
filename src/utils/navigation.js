//@flow
import React from 'react';
import type { RouterHistory } from 'react-router-v4';
import LabelIcon from '@material-ui/icons/Label';
import HomeIcon from '@material-ui/icons/Home';

export const pages = {
    home: '/home',
    page1: '/page1'
};

export const routes = [
    {
        url: pages.home,
        title: 'Home',
        icon: <HomeIcon />
    },
    {
        url: pages.page1,
        title: 'Page 1',
        icon: <LabelIcon />
    }
];

export type RouterProps = {
    history: RouterHistory,
    location: {
        pathname: string,
        state?: string
    }
};

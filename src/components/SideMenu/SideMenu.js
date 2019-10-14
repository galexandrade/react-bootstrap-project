//@flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { routes } from '../../utils/navigation';
import { useStyles } from './SideMenu.style';
import type { RouterProps } from '../../utils/navigation';

type Props = RouterProps & {
    isOpen: boolean,
    onClose: () => void
};
const SideMenu = (props: Props) => {
    const { isOpen, onClose, history, location } = props;
    const classes = useStyles();

    const toggleDrawer = (isOpen: boolean) => event => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        if (!isOpen) {
            onClose();
        }
    };

    const onNavigate = (route: { url: string, title: string }) => {
        history.push(route.url, route.title);
    };

    return (
        <Drawer open={isOpen} onClose={onClose}>
            <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {routes.map(route => (
                        <ListItem
                            button
                            key={route.url}
                            onClick={() => onNavigate(route)}
                            selected={location.pathname === route.url}
                        >
                            <ListItemIcon>{route.icon}</ListItemIcon>
                            <ListItemText primary={route.title} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
};

export default withRouter(SideMenu);

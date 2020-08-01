import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import PersonIcon from '@material-ui/icons/Person';
import { Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom';

const drawerWidth = 215;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Navigation = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [help, setHelp] = useState(false)

    return (
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            DashBoard
                        </Typography>
                        <div>
                            <NotificationsIcon style={{ marginLeft: "600%" }} />
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <div>
                            Welcome Phone number
                            </div>
                        <IconButton onClick={handleDrawerClose}>

                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}

                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key={0}>
                            <Link to="/" >
                                <ListItemIcon> <HomeIcon /> </ListItemIcon>
                                <ListItemText primary="Home b" />
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button key={1}>
                            <ListItemIcon> <MenuBookIcon /> </ListItemIcon>
                            <ListItemText primary="Lessons s" />
                        </ListItem>
                        <Divider />
                        <ListItem button key={2}>
                            <ListItemIcon> <AssignmentIcon /> </ListItemIcon>
                            <ListItemText primary="Assignments s" />
                        </ListItem>
                        <Divider />
                        <ListItem button key={3}>
                            <ListItemIcon> <AssignmentIcon /> </ListItemIcon>
                            <ListItemText primary="My Feedback s" />
                        </ListItem>
                        <Divider />
                        <ListItem button key={4}>
                            <ListItemIcon> <PersonIcon /> </ListItemIcon>
                            <ListItemText primary="My Profile b" />
                        </ListItem>
                        <Divider />
                        <ListItem button key={5} onClick={() => setHelp(!help)} >
                            <ListItemIcon> <HelpIcon /> </ListItemIcon>
                            <ListItemText primary="Help center" />

                        </ListItem>
                        <Collapse in={help}>
                            <List>
                                <ListItem>
                                    <ListItemIcon><HelpIcon /></ListItemIcon>
                                    <ListItemText primary="test" />
                                </ListItem>
                            </List>
                        </Collapse>
                        <Divider />
                        <ListItem button key={6}>
                            <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
                            <ListItemText primary="Logout b" />
                        </ListItem>
                        <Divider />
                    </List>
                </Drawer>

            </div>



        </div>
    );
}

export default Navigation;
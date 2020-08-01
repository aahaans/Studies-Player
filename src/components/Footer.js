import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
// import { makeStyles } from '@material-ui/core/styles';

function Footer() {

    // const useStyles = makeStyles({
    //     root: {
    //         width: 100,
    //     },
    // }); 

    // const classes = useStyles()


    const [valueBottom, setValueBottom] = React.useState(0);

    return (
        <div style={{ position: "fixed", bottom: "0px", width: "100%", marginTop: "10%" }} >
            <Paper elevation={5} >
                <BottomNavigation
                    value={valueBottom}
                    onChange={(event, newValue) => {
                        setValueBottom(newValue);
                    }}
                    showLabels
                // className={classes.root}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                </BottomNavigation>
            </Paper>
        </div>
    )
}

export default Footer;
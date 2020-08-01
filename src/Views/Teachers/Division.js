import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './data'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import { Container, Grid, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import MessageIcon from '@material-ui/icons/Message';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles(theme => ({
    root: {
        height: 380,
        transform: "translateZ(0px)",
        flexGrow: 1
    },
    speedDial: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}));


const Division = (props) => {

    let temp = useParams().id

    let t = null

    data.classes.map((d) => {
        if (d.id == temp) {
            t = d
            console.log(t)
        }
    })

    const division = t

    const newLp = division.id + "/lp/new"
    const newHw = division.id + "/hw/new"
    const newTest = division.id + "/test/new"
    const newMessage = division.id + "/message/new"

    const actions = [
        { icon: <MenuBookIcon />, name: "NewLP", route: newLp },
        { icon: <HomeWorkIcon />, name: "NewHW", route: newHw },
        { icon: <AssessmentIcon />, name: "Tests", route: newTest },
        { icon: <MessageIcon />, name: "Message", route: newMessage },
    ];

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <div style={{ marginTop: "-15%", marginBottom: "5%" }} >
                <Link to="/" style={{ marginLeft: "5%" }} >
                    <ArrowBackIosIcon />
                </Link>
                <div style={{ display: "inline", fontSize: "20px", marginLeft: "13%", fontWeight: "bold" }} >{division.subject} - ({division.division})</div>
                {/* 
            <Link to="/" >
                <HomeIcon />
            </Link> */}
            </div>
            <Paper>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Lessonplan" />
                    <Tab label="Homework" />
                    <Tab label="Tests" />
                </Tabs>
            </Paper>
            {value === 1 ? (
                <Container>
                    <div style={{ marginTop: "5%" }} >
                        <ul>
                            {division.homeworks.map((homework) => (
                                <li key={homework.id} >
                                    <Link to={"/" + division.id + "/hw/" + homework.id} >
                                        <div style={{ borderBottom: "1px solid black", marginBottom: "2%" }} >
                                            <div style={{ fontWeight: "bold" }} >
                                                {homework.title}
                                            </div>
                                            <div style={{ marginLeft: "80%", marginTop: "-5%" }} >
                                                {homework.date}
                                            </div>

                                            <div style={{ marginLeft: "80%", marginTop: "-1%" }} >
                                                {homework.time}
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            ) : (
                    <div></div>
                )}

            <div>
                <div className={classes.root} >
                    <Backdrop open={open} />
                    <SpeedDial
                        ariaLabel="SpeedDial tooltip example"
                        className={classes.speedDial}
                        icon={<SpeedDialIcon />}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        open={open}
                    >
                        {actions.map(action => (
                            <Link to={action.route}  >
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    tooltipOpen
                                    onClick={handleClose}

                                />
                            </Link>
                        ))}
                    </SpeedDial>
                </div>
            </div>
            <div>
                There is a bug,
                it is supposed to show options of new lp ,hw, message, test
                but its not
                for now just click here for new hw
                <div>
                    <Link to={newHw} >
                        <Button variant="contained" color="primary" >Click Me</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Division;
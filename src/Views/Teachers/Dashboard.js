import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { Link } from 'react-router-dom';
import data from './data'
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '../../Components/Navigation';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Dashboard = (props) => {

    const classes = data.classes

    const style = useStyles();

    return (
        <div className={style.root}>
            <Navigation />
            <Grid >
                <Container >
                    <ul>
                        {classes.map((division) => (
                            <li key={division.id} >

                                <Grid item >
                                    <Link to={"/" + division.id} >
                                        <div
                                            className="ml-2" style={{ borderBottom: "1px solid black", marginBottom: "3%" }}
                                        >

                                            <AcUnitIcon />
                                            <div
                                                style={{ fontWeight: "bold", marginLeft: "10%", marginTop: "-9%" }}
                                            >
                                                {division.subject}
                                            </div>
                                            <div
                                                style={{ marginLeft: "80%", marginTop: "-5%" }}
                                            >
                                                {division.date}
                                            </div>
                                            <div
                                                style={{ marginLeft: "10%", marginTop: "-1%" }}
                                            >
                                                {division.division}
                                            </div>
                                            <div
                                                style={{ marginLeft: "21%", marginTop: "-6%" }}
                                            >
                                                || {division.studentCount} Students
                                </div>
                                            <div
                                                style={{ marginLeft: "80%", marginTop: "-1%" }}
                                            >
                                                {division.time}
                                            </div>
                                            <div
                                                style={{ marginLeft: "10%", marginTop: "-5%" }}
                                            >
                                                {division.school}
                                            </div>
                                        </div>
                                    </Link>
                                </Grid>
                            </li>
                        ))}
                    </ul>
                </Container>

            </Grid >
        </div >
    );
}

export default Dashboard;

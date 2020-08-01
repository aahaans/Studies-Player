import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCamera, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import {
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import data from "./data1.js";
// import Headroom from 'react-headroom';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function Assignments() {

    function isLate(dueDate) {
        dueDate = dueDate.split("/")

        var d = new Date();
        var date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()
        date = date.split("/")

        if (dueDate[0] > 100) {
            dueDate = dueDate.reverse()
        }

        for (let i = 0; i < 3; i++) {
            if (date[i] < dueDate[i]) {
                return false
            }
        }

        return true
    }

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let content = null

    const FilterWork = (props) => {
        return (
            <div>
                {data.assignments.map((assignment) => (
                    <Link to={{ pathname: `/assignments/${assignment.id}`, state: { assignment: assignment } }} onClick={() => console.log(assignment)} key={assignment.id} >

                        <li>
                            {assignment.condition === props.filter ? (
                                <div style={{ border: "1px solid black", borderColor: "#f7871e", width: "80%", textAlign: "center", marginTop: "20px" }} >
                                    <div style={{ fontSize: "20px", fontWeight: "bold", borderBottom: "1px solid gray" }} >{assignment.name}</div>
                                    <div>{assignment.subject}</div>
                                    <div>{assignment.teacher}</div>
                                    <div>{assignment.description}</div>
                                    <div>{assignment.condition}</div>
                                    <div>{assignment.duedate}</div>
                                    {isLate(assignment.duedate) ? (
                                        <div style={{ color: "red", fontWeight: "bold" }} >
                                            You are behind on this asignment
                                        </div>
                                    ) : (
                                            <div></div>
                                        )}
                                    <div>{assignment.attachments.length} Attachments</div>
                                </div>
                            ) : (
                                    <div></div>
                                )}

                        </li>
                    </Link>

                ))}
            </div>
        );
    }


    if (value === 0) {
        content =
            <div>
                <ul>
                    {data.assignments.map((assignment) => (
                        <Link to={{ pathname: `/assignments/${assignment.id}`, state: { assignment: assignment } }} onClick={() => console.log(assignment)} key={assignment.id} >
                            <li>
                                <div style={{ border: "1px solid black", borderColor: "#f7871e", width: "80%", textAlign: "center", marginTop: "20px" }} >
                                    <div style={{ fontSize: "20px", fontWeight: "bold", borderBottom: "1px solid gray" }} >{assignment.name}</div>
                                    <div>{assignment.subject}</div>
                                    <div>{assignment.teacher}</div>
                                    <div>{assignment.description}</div>
                                    <div>{assignment.condition}</div>
                                    <div>{assignment.duedate}</div>
                                    {isLate(assignment.duedate) ? (
                                        <div style={{ color: "red", fontWeight: "bold" }} >
                                            You are behind on this asignment
                                        </div>
                                    ) : (
                                            <div></div>
                                        )}
                                    <div>{assignment.attachments.length} Attachments</div>
                                </div>
                                <div></div>

                            </li>
                        </Link>

                    ))}
                </ul>
            </div>
    }

    if (value === 1) {
        content =
            <div>
                <ul>
                    <FilterWork filter="done" />
                </ul>
            </div>
    }

    if (value === 2) {
        content =
            <div>
                <ul>
                    <FilterWork filter="pending" />
                </ul>
            </div>
    }

    return (
        <div>
            <Paper className={classes.root} >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="All" />
                    <Tab label="Done" />
                    <Tab label="Pending" />
                </Tabs>
            </Paper>
            {content}
        </div>
    );
}


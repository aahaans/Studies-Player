import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './data'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import { TextareaAutosize, Button } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';
import PhotoIcon from '@material-ui/icons/Photo';
import SendIcon from '@material-ui/icons/Send';
import { DatePicker } from "@material-ui/pickers";

const CreateHomework = (props) => {

    let temp = useParams().id

    let t = null

    data.classes.map((d) => {
        if (d.id == temp) {
            t = d
            console.log(t)
        }
    })

    const division = t

    const prevLocation = "/" + division.id

    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <div>
            <div style={{ marginTop: "-15%", marginBottom: "5%" }} >
                <Link to={prevLocation} style={{ marginLeft: "5%" }} >
                    <ArrowBackIosIcon />
                </Link>
                <div style={{ display: "inline", fontSize: "20px", marginLeft: "13%", fontWeight: "bold" }} >{division.subject} - ({division.division})</div>

                <Link to="/" style={{ marginLeft: "10%" }} >
                    <HomeIcon />
                </Link>
            </div>
            <div style={{ margin: "1rem", display: "inline" }} >
                Due Date
                <div style={{ display: "inline", marginLeft: "3rem", marginTop: "-15%" }} >
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <Grid container justify="space-around" >
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Choose a Date"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

                </div>
            </div>
            <hr />
            <div>
                <input type="text" placeholder=" Enter Title here" style={{ border: "1px solid black", marginLeft: "10%", width: "75%" }} />
            </div>
            <div style={{ marginLeft: "10%", marginTop: "5%" }} >
                <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder=" Enter your Remarks  Here" style={{ border: "1px solid black", width: "75%" }} />

            </div>
            <div style={{ marginTop: "10%", borderBottom: "1px solid black", padding: "1%" }} >
                <Button label="Upload from Galerry" startIcon={<PhotoIcon />} variant="contained" color="primary" >Gallery</Button>
                <Button label="Add from Camera" startIcon={<CameraAltIcon />} variant="contained" color="default" >Camera</Button>
                <Button label="Record Voice" startIcon={<MicIcon />} variant="contained" color="secondary" >Mic</Button>
            </div>

            <div style={{ textAlign: "center", marginTop: "10%" }} >
                <Link to={prevLocation} >
                    <Button label="Send Homework" startIcon={<SendIcon />} variant="contained" color="primary" >Send to Students</Button>
                </Link>
            </div>
        </div>
    );
}

export default CreateHomework;
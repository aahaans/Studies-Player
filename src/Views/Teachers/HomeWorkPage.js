import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './data'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ShareIcon from '@material-ui/icons/Share';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import HomeIcon from '@material-ui/icons/Home';
import { Button, GridList } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const HomeWorkPage = (props) => {

    let temp = useParams().class_id

    let t = null

    data.classes.map((d) => {
        if (d.id == temp) {
            t = d
            // console.log(t)
        }
    })

    const division = t
    console.log(division)

    temp = useParams().hw_id

    division.homeworks.map((hw) => {
        if (hw.id == temp) {
            t = hw
            // console.log(t)
        }
    })

    const homework = t
    console.log(homework)

    const prevLocation = "/" + division.id

    const responsesLocation = "/" + division.id + "/hw/" + homework.id + "/responses"

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
            <div style={{ borderBottom: "1px solid black" }} >
                <div style={{ marginLeft: "5%", marginTop: "2%" }}>
                    Homework {homework.id}
                    <div style={{}} >
                        {homework.dueDate}
                    </div>
                </div>
                <div style={{ marginTop: "-7%" }} >
                    <div style={{ marginLeft: "75%" }} >
                        {homework.date}
                    </div>
                    <div style={{ marginLeft: "75%" }} >
                        {homework.time}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "5%", textAlign: "center", borderBottom: "1px solid black" }} >
                <div>
                    <Link to={responsesLocation}>
                        <Button label="Student responses" startIcon={<AccessibilityNewIcon />} variant="contained" color="default" >View Student Response</Button>
                    </Link>
                    <ShareIcon style={{ marginLeft: "5%" }} />
                </div>
                <div style={{ fontWeight: "bold", marginTop: "2%" }} >
                    {homework.title}
                </div>
                <div style={{ marginTop: "1%" }} >
                    {homework.description}
                </div>
            </div >
            <div style={{ marginTop: "8%" }} >
                <div>
                    <AttachFileIcon />
                    Attachments
                </div>
            </div>
        </div>
    );
}

export default HomeWorkPage;
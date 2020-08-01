import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './data'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';

const Responses = (props) => {

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

    const prevLocation = "/" + division.id + "/hw/" + homework.id

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
        </div>
    );
}

export default Responses;
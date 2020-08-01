import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'
import CameraAltIcon from '@material-ui/icons/CameraAlt'
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Collapse from "@material-ui/core/Collapse";
import TextFieldsIcon from '@material-ui/icons/TextFields';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import SendIcon from '@material-ui/icons/Send';

const AssignmentPage = (props) => {

    // const  = useLocation().pathname

    const id = useParams()

    console.log(id)

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
        button: {
            margin: theme.spacing(1),
        },
        container: {
            display: "flex"
        },
        paper: {
            margin: theme.spacing(1)
        }
    }));
    const classes = useStyles();

    let temp = useLocation()
    const assignment = temp.state.assignment
    // const assignment = useLocation().state.assignment
    console.log(assignment)
    const d = new Date();
    const date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()
    console.log(date)

    const [addWork, setAddWork] = useState(false)
    console.log(addWork)
    const [addTextWork, setAddTextWork] = useState(false)
    console.log(addTextWork)

    const [skipTask, setSkipTask] = useState(false)
    console.log(skipTask)

    const [message, setMessage] = useState(false)
    console.log("message is" + message)

    return (
        <div style={{ textAlign: "center" }} >
            <Link to="/assignments"> ‹ Return to Assignments</Link>
            <div> This is the assignment Page </div>
            <div> {assignment.name} </div>
            <div> {assignment.description} </div>
            <div> {assignment.attachments.length} Attachments </div>
            <div>
                {assignment.attachments.map((attachment) => (
                    <div key={attachment.id} style={{ margin: "auto", textAlign: "center" }} >
                        <div> Image {attachment.id} </div>
                        <img src={attachment.source} className="w-16" alt="Attachment" />
                    </div>
                ))}
            </div>

            <div>
                <div style={{fontWeight: "bold", fontSize: "20px", borderBottom: "1px solid black"}} >Work</div>            
            </div>

            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<AddIcon />}
                    onClick={() => setAddWork(!addWork)}
                >
                    Add Work
                </Button>
            </div>

            <div className={classes.container}>
                <Collapse in={addWork}>
                    {/* <Paper className={classes.paper}> */}
                    {/* <svg className={classes.svg} /> */}
                    <div>

                        <div style={{ display: "inline" }} >
                            <CameraAltIcon />
                        </div>
                        <div style={{ display: "inline" }} >
                            <input accept="audio/*" className={classes.input} id="icon-button-file" type="file" multiple />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <AddPhotoAlternateIcon />
                                </IconButton>
                            </label>
                        </div>

                        <div>
                            <TextFieldsIcon onClick={() => setAddTextWork(!addTextWork)} />
                            <Collapse in={addTextWork} >
                                <div style={{ textAlign: "center" }}>
                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        rowsMin={5}
                                        color="primary"
                                        variant="primary"
                                        placeholder="Type Text For this assignment"
                                        style={{ border: "1px solid black" }}
                                    />
                                    <Button color="primary" variant="outlined" className={classes.button} >
                                        Save                                    
                                        
                                    </Button>
                                </div>

                            </Collapse>
                        </div>
                    </div>
                </Collapse>

            </div>


            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<AssignmentTurnedInIcon />}
                    // onClick={() => setSubmitWork(!submitWork)}
                    onClick={() => window.confirm("Your work should be done and reviewd")}
                >
                    Submit Work
                </Button>

            </div>

            <div>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<SkipNextIcon />}
                    onClick={() => setSkipTask(!skipTask)}
                >
                    Skip  task
                </Button>
                <Collapse in={skipTask} >
                    <div>
                        <form>
                        <input type="text" style={{border: "1px solid black", display: "block"}} placeholder="Reason? " required />
                        <TextareaAutosize 
                            aria-label="minimum height"
                                rowsMin={3}
                                        color="primary"
                                        variant="primary"
                                        placeholder="Description Optional"
                            style={{ border: "1px solid black" }}
                             />
                                <Button color="primary" variant="outlined" className={classes.button} >
                                    Send Request                                    
                                        
                                </Button>
                        </form>
                    </div>

                </Collapse>
            </div>

            <div>
            <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<SendIcon />}
                    onClick={() => setMessage(!message)}
                >
                    Communicate with your teacher                
                </Button>
                <Collapse in={message} >
                    <div>
                        <input type="checkbox" name="box" />
                        <label htmlFor="box" >This is Doubt of studies</label>
                        <TextareaAutosize 
                            aria-label="minimum height"
                                rowsMin={3}
                                        color="primary"
                                        variant="primary"
                                        placeholder="Message"
                            style={{ border: "1px solid black" }}
                            required
                             />
                            <Button color="primary" variant="outlined" className={classes.button} >
                                Send                                                
                            </Button>
                    </div>
                </Collapse>
            </div>

            <div style={{fontWeight: "bold", fontSize: "20px", borderBottom: "1px solid black"}} >Previous Messages</div>            





        </div>
    );
}

export default AssignmentPage;

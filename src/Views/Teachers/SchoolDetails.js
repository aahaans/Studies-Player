import React from 'react';
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Typography, Button, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const SchoolDetails = (props) => {

    const Boards = [
        { title: 'ICSE' },
        { title: 'CBSE' },
        { title: 'Karnatake State Board' },
        { title: 'Foo' },
        { title: 'IB' },
    ];

    const Standard = [
        { title: 'LKG' },
        { title: 'HKG' },
        { title: 'Pre' },
    ];

    const Subject = [
        { title: 'Math' },
        { title: 'Biology' },
        { title: 'Physics' },
        { title: 'Chemistry' },
        { title: 'English' },
    ];

    const style = { marginTop: "5%", marginLeft: "7%" }

    return (
        <div>
            <div style={{ marginLeft: "5%" }} >
                <ArrowBackIosIcon />
            </div>
            <Container>
                <div style={{ textAlign: "center", marginTop: "8%" }} >

                    <div>
                        <Typography variant="h6" style={{ fontWeight: "bold" }} > School & Board Details </Typography>
                        <p>Enter name of your school you are <br /> teaching in and the type of board </p>
                    </div>
                    <div style={{ marginTop: "5%" }} >

                        <div >
                            <input placeholder=" Enter your school's name" style={{ border: "1px solid black", width: "85%" }} />
                        </div>

                        <div style={style} >
                            <Autocomplete
                                id="combo-box-demo1"
                                options={Boards}
                                getOptionLabel={(option) => option.title}
                                style={{ width: "92%" }}
                                renderInput={(params) => <TextField {...params} label="Select Your Board" variant="outlined" />}
                            />
                        </div>

                        <div style={style} >
                            <Autocomplete
                                id="combo-box-demo"
                                options={Standard}
                                getOptionLabel={(option) => option.title}
                                style={{ width: "92%" }}
                                renderInput={(params) => <TextField {...params} label="Select Standard" variant="outlined" />}
                            />
                        </div>

                        <div style={style} >
                            <Autocomplete
                                id="combo-box-demo2"
                                options={Subject}
                                getOptionLabel={(option) => option.title}
                                style={{ width: "92%" }}
                                renderInput={(params) => <TextField {...params} label="Select Subject" variant="outlined" />}
                            />
                        </div>
                        <div style={{}} >
                            {props.usage === "s" ? (
                                <div style={{ width: "100%" }} >
                                    <input placeholder=" Enter your Roll No. " style={{ border: "1px solid black", width: "85%" }} />
                                </div>
                            ) : (
                                    <div></div>
                                )}
                        </div>

                        <div style={{ marginTop: "7%" }} >
                            <Link to="/" >
                                <Button variant="contained" color="primary" style={{ width: "80%" }} >
                                    <div style={{ textAlign: "center" }} >
                                        Next <NavigateNextIcon />
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Container>

        </div>
    );
}

export default SchoolDetails;
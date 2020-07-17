import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCamera, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import {
    Link
} from "react-router-dom";

// // import Webcam from "react-webcam";

const Tools = () => {
    return (
        <div>
            <div>
                <Link to="/tools/microphone" >
                    <div style={{ width: "40%", marginTop: "15px", border: "1px solid gray", padding: "5px", marginLeft: "30px" }}>
                        <img src="microphone.png" alt="Microphpone" />
                        <div style={{ fontWeight: "bold", textAlign: "center" }} >Microphone</div>
                        <div style={{ background: "#f00", width: "50px", height: "50px", borderRadius: "50%", marginLeft: "27%" }} ></div>
                    </div>
                </Link>
            </div>

            <div style={{ width: "40%", marginTop: "-218px", border: "1px solid gray", padding: "6px", marginLeft: "195px", }}>
                <Link to="/tools/camera" >
                    <img src="photo.png" alt="Camera" />
                    <div style={{ fontWeight: "bold", textAlign: "center" }} >Camera</div>
                    <div style={{ background: "#f00", width: "50px", height: "50px", borderRadius: "50%", marginLeft: "27%" }} ></div>
                </Link>
            </div>
        </div>
    );
}

export default Tools;
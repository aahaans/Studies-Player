import React from 'react';

const ShowImage = (props) => {
    let s = "static/Nursery_Rhymes/audio" + props.source + ".jpg"
    console.log("source is = " + s)
    // static/Nursery_Rhymes/audio4. 
    return ( 
        <React.Fragment>
            <div style={{width: "100%", height: "100%"}}>
                {/* <center> */}
                <img src={s} alt="Song Thumbnail" style={{width: "900px", height: "750px", margin: "auto", display: "block", verticalAlign: "middle"}} />
                {/* </center> */}
            </div>
        </React.Fragment>
     );
}
 
export default ShowImage;
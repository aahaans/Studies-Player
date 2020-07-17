import React from "react";
import { Link } from 'react-router-dom'

const ShowAlbums = (props) => {
  const pointerStyles = { cursor: "pointer" };
  const recvProps = props;

  console.log("album props", props);
  return (
    <React.Fragment>
      <h2 style={{textAlign: "center"}}>Lectures</h2>
      <div className="grid">
     
        {props.media.map((playlist, index) => (
          <div
            className="playlist-square"
            style={pointerStyles}
            onClick={() => props.selectAlbum(playlist)}
            key={`playlist-${index}`}
          >
            <img src={playlist.albumArtwork} alt={playlist.albumName} style={{width: "150px", height: "150px"}} />
            <div
              className="play-button"
              onClick={(e) => {
                e.stopPropagation();
                props.updatePlaylist(playlist.songs);
              }}
            >
              {JSON.stringify(props.playlist) ===
                JSON.stringify(playlist.songs.map((song) => song.src)) &&
              props.playlistIsPlaying ? (
                <i className="fa fa-pause" />
              ) : (
                <i className="fa fa-play" style={{ paddingLeft: "3px" }} />
              )}
            
            </div>
            { recvProps ? (<Link to={{ pathname: '/player/', aboutProps: { foo: "testing"} }}>Go to player</Link>) :(null)}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ShowAlbums;

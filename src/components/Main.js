import React, { Component } from 'react'
import ShowPlaylists from './MusicSelect/ShowPlaylists'
import ShowAlbums from './MusicSelect/ShowAlbums'
import './styles.css'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      media: [],
      selectedAlbum: null
    }
    this.selectAlbum = this.selectAlbum.bind(this)
    this.clearSelectedAlbum = this.clearSelectedAlbum.bind(this)
  }

  componentDidMount() {
    fetch('media.js')
      .then(res => res.json())
      .then(media => this.setState({ media }))
  }

  render() {
    let {media, selectedAlbum} = this.state;
    console.log("Recieved media and albums",media);
    let selected = selectedAlbum || null;
    console.log("selected", selected ? selected : "did not get selected");
    return (
      <main>
        <div className="albums">
          {this.state.selectedAlbum
            ? <ShowPlaylists
              clearSelectedAlbum={this.clearSelectedAlbum}
              selectedAlbum={this.state.selectedAlbum}
              playlist={this.props.playlist}
              updatePlaylist={this.props.updatePlaylist}
              playlistIsPlaying={this.props.playlistIsPlaying}
              currentSongIndex={this.props.currentSongIndex} />
            : <ShowAlbums
              media={this.state.media}
              selectAlbum={this.selectAlbum}
              updatePlaylist={this.props.updatePlaylist}
              currentSongIndex={this.props.currentSongIndex} 
              playlist={this.props.playlist}
              playlistIsPlaying={this.props.playlistIsPlaying} />}
        </div>
      </main>
    )
  }

  selectAlbum(selectedAlbum) {
    this.setState({ selectedAlbum })
  }

  clearSelectedAlbum() {
    this.setState({ selectedAlbum: null })
  }
}

import React, { Component } from 'react'

import MusicPlayer from './music-player';
import { connect } from 'react-redux'
import {songsList} from '../data';

const CurrentSong=(props)=>{
    const {songIndex, title, playlistName, src}=props.selecedSong;

    return(
          
            <div className='row'>
              <div className='song-details'>
                  <h1 className='now-playing'>{songIndex!==-1?"Now Playing": 'Please select a song to Play'}</h1>
                  <h3 className='playlist-name'>{playlistName}</h3>
                  <h5 className='song-name'>{title}</h5>

              </div>
              <div className='song-details'>
                <MusicPlayer
                  src={src}
                />
              </div>
          </div>
      )

}
const mapStateToProps = state => {
  const { selecedSong } = state;
  return {
    selecedSong
  }
}
export default connect(mapStateToProps)(CurrentSong);
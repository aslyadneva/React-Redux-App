import React from 'react'; 
import { connect } from 'react-redux'; 

const SongDetail = (props) => {

  const getSong = () => {
    let song; 
    if (props.song) {
      song = (
        <div>
          <div>Title: {props.song.title}</div>
          <div>Duration: {props.song.duration}</div>
        </div>
      );
      
    } else {
      song = 'Select a song!'
    }

    return song; 
  }
  

  return (
    <div>{getSong()}</div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.selectedSong); 
  return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail); 
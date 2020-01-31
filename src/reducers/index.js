// Reducers file aka the state components of the app
import { combineReducers } from 'redux'; 

// static list of songs just like default props
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05'}, 
    { title: 'Macarena', duration: '2:30'}, 
    { title: 'All Star', duration: '3:15'}, 
    { title: 'I Want It That Way', duration: '1:45'}
  ]; 
}

// the current selected song, when the app first starts there is no selected song 
// action is the action object that will communicate which song was selected 
const selectedSongReducer = ( selectedSong = null, action ) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload         // payload is the actual song object that was selected 
  }
  return selectedSong; 
}

//the keys of the object are the keys that are in our state object
export default combineReducers({
  songs: songsReducer, 
  selectedSong: selectedSongReducer
}); 
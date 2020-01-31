// Action Creator aka a method that will communicate to change the state

const selectSong = () => {
  // Return an action 
  return {
    type: 'SONG_SELECTED'
  }
}
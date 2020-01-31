// Action Creator aka a method that will communicate to change the state

//it takes a 'song' argument that represents which song is selected 

export const selectSong = (song) => {
  // Return an action 
  return {
    type: 'SONG_SELECTED', 
    payload: song
  }
}
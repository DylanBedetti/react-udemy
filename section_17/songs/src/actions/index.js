// Action Creator
export const selectSong = (song) => {
  // return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

// instead of default export - creating named export


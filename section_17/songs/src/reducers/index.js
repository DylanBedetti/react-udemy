import { combineReducers } from "redux"; //named export

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Start", duration: "3:15" },
    { title: "I want it that way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

// keys of this object, are the keys that show up in the state object
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

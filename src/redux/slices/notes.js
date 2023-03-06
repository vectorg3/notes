import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [{id: 123 ,title: 'hello' , text: 'hi' }],
  },
  reducers: {
    addNote(state, action) {
      state.notesList = [
        ...state.notesList,
        { id: Date.now(), title: action.payload.title, text: action.payload.text },
      ];
    },
  },
});
export default notesSlice.reducer;
export const { addNote } = notesSlice.actions;

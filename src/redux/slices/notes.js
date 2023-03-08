import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notesList: JSON.parse(localStorage.getItem('notes'))
            ? JSON.parse(localStorage.getItem('notes'))
            : [{ id: 1123256161558, text: 'bla-bla-bla' }],
    },
    reducers: {
        addNote(state, action) {
            state.notesList = [
                ...state.notesList,
                {
                    id: Date.now(),
                    text: action.payload.text,
                },
            ];
        },
        deleteNote(state, action) {
            state.notesList = state.notesList.filter(
                (el) => el.id !== action.payload
            );
        },
    },
});
export default notesSlice.reducer;
export const { addNote, deleteNote, editNote } = notesSlice.actions;

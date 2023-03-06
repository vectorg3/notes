import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './slices/notes.js';
const store = configureStore({
    reducer:{
        notes: notesReducer,
    }
})

export default store;
import * as NotesService from "../../api/notes/notes";
import { GET_LIST, NEW_NOTE, MOD_NOTE, DEL_NOTE, SHW_NOTE, FIL_NOTE, SRT_NOTE } from "./constants";

export const getNotes = () =>
    (dispatch) =>
        NotesService.getNotes()
            .then((response) => {
                response.data.notes = JSON.parse(response.data.notes)

                const respons2 = {
                    notes: response.data.notes,
                    message: response.data.message,
                    isOk: response.data.isOk,
                };

                dispatch({
                    type: GET_LIST,
                    payload: respons2,
                });
            }
            );

export const delNote = (noteId) =>
    (dispatch) => {
        NotesService.delNote(noteId)
            .then((response) => {
                dispatch({
                    type: DEL_NOTE,
                    payload: response.data,
                });
            });
    };


export const newNote = (noteDta) =>
    (dispatch) => {
        NotesService.addNote(noteDta)
            .then((response) => {
                dispatch({
                    type: NEW_NOTE,
                    payload: response.data,
                });
            })
            .then(() => {
                dispatch({
                    type: SHW_NOTE,
                    payload: { noteId: -99, isShow: false },
                });
            });
    };

export const modNote = (noteId, noteDta) =>
    (dispatch) => {
        NotesService.modNote(noteId, noteDta)
            .then((response) => {
                dispatch({
                    type: MOD_NOTE,
                    payload: response.data,
                });
            })
            .then(() => {
                dispatch({
                    type: SHW_NOTE,
                    payload: { noteId: -99, isShow: false },
                });
            });
    };

export const shwNote = (noteId, isShow) =>
    (dispatch) => {
        dispatch({
            type: SHW_NOTE,
            payload: { noteId: noteId, isShow: isShow }
        });
    };

export const filNote = (data) =>
    (dispatch) => {
        dispatch({
            type: FIL_NOTE,
            payload: data
        });
    };

export const sortNote = (data) =>
    (dispatch) => {
        dispatch({
            type: SRT_NOTE,
            payload: data
        });
    };
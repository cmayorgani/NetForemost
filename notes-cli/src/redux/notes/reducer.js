import { GET_LIST, MOD_NOTE, DEL_NOTE, SHW_NOTE, NEW_NOTE, FIL_NOTE, SRT_NOTE } from "./constants"

const initialState = {
    lstNotes: [],
    NotePostRequest: [],
    popup: [],
    filter: '',
    sort: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST:
            {
                return {
                    ...state,
                    lstNotes: action.payload.notes,
                    NotePostRequest: {
                        isOk: action.payload.isOk,
                        message: action.payload.message,
                        note: []
                    },
                }
            }
        case DEL_NOTE:
            {
                const dtaNotes = JSON.parse(JSON.stringify(state.lstNotes));
                const noteId = JSON.parse(action.payload.notes).NotId;

                const newList = dtaNotes?.flatMap(item => item.NotId == noteId ? [] : item);

                return {
                    ...state,
                    lstNotes: newList,
                    NotePostRequest: action.payload
                }
            }
        case NEW_NOTE:
            {
                const dtaNotes = JSON.parse(JSON.stringify(state.lstNotes));
                const newNote = JSON.parse(action.payload.notes);

                dtaNotes.push(newNote);

                return {
                    ...state,
                    lstNotes: dtaNotes,
                    NotePostRequest: action.payload
                }
            }
        case MOD_NOTE:
            {
                const dtaNotes = JSON.parse(JSON.stringify(state.lstNotes));
                const modNote = JSON.parse(action.payload.notes);
                const noteId = modNote.NotId;

                const newList = dtaNotes?.flatMap(item => item.NotId == noteId ? [] : item);

                newList.push(modNote);

                return {
                    ...state,
                    lstNotes: newList,
                    NotePostRequest: action.payload
                }
            }
        case SHW_NOTE:
            {
                return {
                    ...state,
                    popup: action.payload,
                }
            }
        case FIL_NOTE:
            {
                return {
                    ...state,
                    filter: action.payload,
                }
            }
        case SRT_NOTE:
            {
                return {
                    ...state,
                    sort: action.payload,
                }
            }
        default:
            {
                return state;
            }
    };
};

export default reducer;
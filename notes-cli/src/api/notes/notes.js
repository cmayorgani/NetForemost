import axios from "axios";
import config from "../../glbconfig.json";

//Get list notes
export const getNotes = () => {
    return axios({
        method: 'get',
        url: config.apiUrl,
        headers: {
            KeyAPI: config.apiKey,
        },
    });
};

//Delete an individual note
export const delNote = (noteId) => {
    return axios({
        method: 'delete',
        url: config.apiUrl + "/" + noteId,
        headers: {
            KeyAPI: config.apiKey,
        },
    });
}

//Create one note
export const addNote = (dtaNote) => {
    return axios({
        method: 'post',
        url: config.apiUrl,
        headers: {
            'Content-Type': 'application/json',
            KeyAPI: config.apiKey,
        },
        data: {
            DataNote: { ...dtaNote }
        }
    });
};

//Update one Note
export const modNote = (noteId, dtaNote) => {
    return axios({
        method: 'put',
        url: config.apiUrl + "/" + noteId,
        headers: {
            'Content-Type': 'application/json',
            KeyAPI: config.apiKey,
        },
        data: {
            DataNote: { ...dtaNote }
        }
    });

};

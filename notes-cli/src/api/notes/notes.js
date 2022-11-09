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
    const DtaRequest = { 'DataNote': { ...dtaNote } };
    const AxiosCfg = {
        method: 'post',
        url: config.apiUrl,
        headers: {
            KeyAPI: config.apiKey,
        },
        data: { ...DtaRequest }
    };

    console.log({ AxiosCfg: AxiosCfg });

    return axios(AxiosCfg);
};

//Update one Note
export const modNote = (noteId, dtaNote) => {
    const DtaRequest = { 'DataNote': { ...dtaNote } };
    const AxiosCfg = {
        method: 'put',
        url: config.apiUrl + "/" + noteId,
        headers: {
            KeyAPI: config.apiKey,
        },
        data: { ...DtaRequest }
    }

    console.log({ AxiosCfg: AxiosCfg });

    return axios(AxiosCfg);
};

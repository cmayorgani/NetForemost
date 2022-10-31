import getaxios from '../axiosConfig';
import config from "../../glbconfig.json";

const BaseUrl = config.apiUrl + "/Notes";
const UrlKey = "?KeyAPI=" + config.apiKey;

//Get list notes
export const getNotes = () => getaxios.get(BaseUrl + UrlKey);

//Delete an individual note
export const delNote = (noteId) => getaxios.delete(BaseUrl + "/" + noteId + UrlKey);

//Create one note
export const addNote = (dtaNote) => {

    const strDtaNote = JSON.stringify(dtaNote)

    const dtaResponse = getaxios({
        method: 'post',
        url: BaseUrl + UrlKey,
        headers: {
            DataNote: strDtaNote,
        },
        data: {
        }
    });

    return dtaResponse;
};

//Update one Note
export const modNote = (noteId, dtaNote) => {

    const strDtaNote = JSON.stringify(dtaNote)

    const dtaResponse = getaxios({
        method: 'put',
        url: BaseUrl + "/" + noteId + UrlKey,
        headers: {
            DataNote: strDtaNote,
        },
        data: {
        }
    });

    return dtaResponse;

};

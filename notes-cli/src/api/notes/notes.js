import getaxios from '../axiosConfig';

//Get list notes
export const getNotes = () => {
    return getaxios.get();
};

//Delete an individual note
export const delNote = (noteId) => {
    console.log({ dataResponse: getaxios.delete({ url: "/" + noteId }) });
    return getaxios.delete({ url: "/" + noteId });
}

//Create one note
export const addNote = (dtaNote) => {
    return getaxios.post({ data: 'DataNote="' + JSON.stringify(dtaNote) + '"' });
};

//Update one Note
export const modNote = (noteId, dtaNote) => {
    return getaxios.post({ url: "/" + noteId, data: { data: 'DataNote="' + JSON.stringify(dtaNote) + '"' } });
};

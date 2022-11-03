import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import CtrlNoteVw from "../view";
import CtrlNoteEd from "../edit"

const Component = () => {
    const dtaNotes = useSelector(state => state.notes.lstNotes);
    const showNote = useSelector(state => state.notes.popup);
    const filterNote = useSelector(state => state.notes.filter);
    const sortNote = useSelector(state => state.notes.sort);

    const interGetNotes = () => {
        var valRet = [];
        var notesFilterSort = [];

        switch (sortNote.sortField) {
            case 'title':
                notesFilterSort = dtaNotes?.sort(function (a, b) {
                    if (sortNote.sortType == 'asc') {
                        if (a.Title.toLowerCase() < b.Title.toLowerCase()) return -1;
                    }
                    else {
                        if (a.Title.toLowerCase() > b.Title.toLowerCase()) return -1;
                    }
                    return 0;
                });
            case 'body':
                notesFilterSort = dtaNotes?.sort(function (a, b) {
                    if (sortNote.sortType == 'asc') {
                        if (a.Body.toLowerCase() < b.Body.toLowerCase()) return -1;
                    }
                    else {
                        if (a.Body.toLowerCase() > b.Body.toLowerCase()) return -1;
                    }
                    return 0;
                });
            case 'date':
                notesFilterSort = dtaNotes?.sort(function (a, b) {
                    if (sortNote.sortType == 'asc') {
                        if (a.Modified == null ? a.Added : a.Modified < b.Modified == null ? b.Added : b.Modified) return -1;
                    }
                    else {
                        if (a.Modified == null ? a.Added : a.Modified > b.Modified == null ? b.Added : b.Modified) return -1;
                    }
                    return 0;
                });
            default:
                notesFilterSort = dtaNotes;
        }

        if (dtaNotes != undefined && Array.isArray(dtaNotes) && dtaNotes.length > 0) {
            if (filterNote != "") {
                const strFilter = filterNote.toLowerCase()
                const notesFilter = notesFilterSort?.filter(note => note.Title.toLowerCase().includes(strFilter) || note.Body.toLowerCase().includes(strFilter));
                valRet = notesFilter?.map((dtanote, idx) => <CtrlNoteVw key={idx} note={dtanote} />);
            }
            else {
                valRet = notesFilterSort?.map((dtanote, idx) => <CtrlNoteVw key={idx} note={dtanote} />);
            }
        }

        return valRet;
    }

    const [notes, setNotes] = useState(interGetNotes);
    const [showPopup, setShowPopup] = useState(showNote.isShow === undefined ? false : showNote.isShow);

    useEffect(() => {
        setNotes(interGetNotes);
    }, [dtaNotes, filterNote, sortNote])

    useEffect(() => {
        setShowPopup(showNote.isShow === undefined ? false : showNote.isShow);
    }, [showNote])

    return (
        <Fragment>
            {notes}
            {showPopup && <CtrlNoteEd />}
        </Fragment>
    );
};

export default Component;
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

import * as actNotes from "../../../redux/notes/actions";

const Component = () => {
    const dispatch = useDispatch();
    const showNote = useSelector(state => state.notes.popup);
    const dtaNoteGlb = useSelector(state => state.notes.lstNotes);

    const noteId = showNote.noteId;

    const getNote = () => {
        const curNote = dtaNoteGlb?.filter(note => note.NotId == noteId)[0];
        return curNote;
    };

    const [dtaNote, setDtaNote] = useState(getNote);

    const [showPopup, setShowPopup] = useState(showNote.isShow === undefined ? false : showNote.isShow);

    const [noteTitle, setNoteTitle] = useState(dtaNote == undefined ? "" : dtaNote.NotTitle);
    const [noteBody, setNoteBody] = useState(dtaNote == undefined ? "" : dtaNote.NotBody);

    useEffect(() => {
        setShowPopup(showNote.isShow === undefined ? false : showNote.isShow);
        setDtaNote(getNote);
    }, [showNote])

    const closeNote = () => {
        dispatch(actNotes.shwNote(-99, false));
    };

    const saveNote = () => {

        const noteDta = { NotTitle: noteTitle, NotBody: noteBody };

        if (noteId > 0) {
            dispatch(actNotes.modNote(noteId, noteDta));
        }
        else {
            dispatch(actNotes.newNote(noteDta));
        }

    };

    return (
        <Fragment>
            <Modal show={showPopup} onHide={closeNote}>
                <Modal.Header>
                    <Modal.Title>{(noteId >= 0 ? "Modify" : "Add") + " Note"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card className="col-12">
                        <Card.Body>
                            <Form>
                                <Form.Group className="col-12 mb-3" controlId="cntrl_title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(event) => setNoteTitle(event.target.value)}
                                        defaultValue={noteTitle} />
                                </Form.Group>
                                <Form.Group className="col-12 mb-3" controlId="cntrl_body">
                                    <Form.Label>Body</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        onChange={(event) => setNoteBody(event.target.value)}
                                        defaultValue={noteBody} />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeNote} className="btn-secondary">Close</Button>
                    <Button onClick={saveNote} className="btn-primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};


export default Component;
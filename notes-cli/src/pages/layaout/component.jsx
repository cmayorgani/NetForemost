import React from "react";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import LstNotes from '../../components/notes/list';
import * as actNotes from "../../redux/notes/actions";
import Filtro from "../../components/search";
import Message from "../../components/message";
import Sort from "../../components/sort";

const Component = () => {
    const dispatch = useDispatch();
    const dtaNotes = useSelector(state => state.notes.lstNotes);

    const [cntNotes, setCntNotes] = useState(dtaNotes?.length);


    useEffect(() => {
        setCntNotes(dtaNotes.length);
    }, [dtaNotes]);

    const addNote = () => {
        dispatch(actNotes.shwNote(-100, true));
    };

    return (
        <Fragment>
            <Message />
            <Card className="col-12">
                <Card.Body>
                    <Card.Title>
                        <div className="col-12 d-flex flex-row">
                            <div className="col-3 d-flex flex-row">
                                <div><h1>Notes</h1></div>
                                <div><h6><Badge bg="info">{cntNotes}</Badge></h6></div>
                                <div><Sort /></div>
                            </div>
                            <div className="col-6">
                                <Filtro />
                            </div>
                            <div className="col-3 d-flex justify-content-end">
                                <Button onClick={addNote} variant="primary">Add Note</Button>
                            </div>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="col-12 d-flex justify-content-center flex-row flex-wrap">
                            <LstNotes />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default Component;
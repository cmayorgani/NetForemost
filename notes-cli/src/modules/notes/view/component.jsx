import React, { Fragment } from "react";
import { useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import * as actNotes from "../../../redux/notes/actions";

const Component = (props) => {
    const dispatch = useDispatch();
    const dtaNote = props.note;

    const removeNote = () => {
        dispatch(actNotes.delNote(dtaNote.NotId));
    };

    const modifyNote = () => {
        dispatch(actNotes.shwNote(dtaNote.NotId, true));
    };

    const getTitle = () => {

        const getDate = (new Date(dtaNote.NotFechamod != null ? dtaNote.NotFechamod : dtaNote.NotFechaadd)).toLocaleString();
        const isNewLabel = dtaNote.NotFechamod != null ? "Modified : " : "Created : ";

        const valRet = <div className="col-12 d-flex flex-row">
            <div className="col-1">{ dtaNote.NotTitle }</div>
            <div className="col-11 d-flex justify-content-end">{ isNewLabel }{ getDate }</div>
        </div>;
        
        return valRet;        
    }


    return (
        <Fragment>
            <Card className="col-sm-11 col-md-5 m-3 p-2">
                <Card.Body>
                    <Card.Title>{getTitle()}<hr /></Card.Title>
                    <Card.Text className="card-text">{dtaNote.NotBody}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="col-12 d-flex justify-content-center flex-row">
                        <div className="col-sm-12 col-md-6">
                            <Button onClick={modifyNote} className="btn-primary">Modify Note</Button>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-end">
                            <Button onClick={removeNote} className="btn-danger">Remove Note</Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </Fragment>
    );
};

export default Component;
import React, { Fragment, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'

import { useDispatch } from "react-redux";

import * as actNotes from "../../redux/notes/actions";

const Component = () => {
    const dispatch = useDispatch();

    const [textFilter, setTextFilter] = useState("");

    useEffect(() => {
        dispatch(actNotes.filNote(textFilter));
    }, [textFilter]);

    return (
        <Fragment>
            <div className="w-100 col-12">
                <Form.Control
                    type="text"
                    onChange={(event) => setTextFilter(event.target.value)}
                    placeholder="type here to filter the notes"
                />
            </div>
        </Fragment>
    );
};

export default Component;
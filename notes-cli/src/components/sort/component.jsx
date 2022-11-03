import React, { Fragment, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'

import { useDispatch } from "react-redux";

import * as actNotes from "../../redux/notes/actions";

const Component = () => {
    const dispatch = useDispatch();

    const [sortField, setSortField] = useState("title");
    const [sortType, setSortType] = useState("asc");

    useEffect(() => {
        const dataSort = { sortField: sortField, sortType: sortType }
        dispatch(actNotes.sortNote(dataSort));
    }, [sortField, sortType]);

    return (
        <Fragment>
            <div className="col-12 p-2 d-flex flex-row">
                <Form.Select
                    onChange={(event) => setSortField(event.target.value)}
                    placeholder="type here to filter the notes"
                >
                    <option value="title">Title</option>
                    <option value="body">Body</option>
                    <option value="date">Date</option>
                </Form.Select>
                <Form.Select
                    onChange={(event) => setSortType(event.target.value)}
                    placeholder="type here to filter the notes"
                >
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </Form.Select>
            </div>
        </Fragment>
    );
};

export default Component;
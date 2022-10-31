import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Toast, ToastContainer, Alert } from 'react-bootstrap'

const Component = () => {
    const message = useSelector(state => state.notes.NotePostRequest.message);
    const isOkPostBack = useSelector(state => state.notes.NotePostRequest.isOk);

    const validateMsg = () => {
        return !isOkPostBack && message != undefined && message != "" && message != "OK";
    }

    const [textMsg, setTextMsg] = useState(validateMsg() ? message : "");
    const [show, setShow] = useState(validateMsg() ? true : false);

    useEffect(() => {
        setTextMsg(validateMsg() ? message : "");
        setShow(validateMsg() ? true : false);
    }, [message, isOkPostBack]);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Notes Message</Alert.Heading>
                <p>{textMsg}</p>
            </Alert>
        );
    }
};

export default Component;
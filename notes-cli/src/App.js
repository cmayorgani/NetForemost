import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';

import './App.css';
import Layout from './modules/layaout';

import 'bootstrap/dist/css/bootstrap.min.css';

import * as actNotes from "./redux/notes/actions";

export const App = () => {
  const dispatch = useDispatch();

  Promise.all([
    dispatch(actNotes.getNotes()),
    dispatch(actNotes.sortNote({ sortField: 'title', sortType: 'desc' })),
  ]).catch(razon => {
    console.log({ "Promise_Init": razon })
  });

  return (
    <Fragment>
      <Layout />
    </Fragment>
  )
}

export default App;

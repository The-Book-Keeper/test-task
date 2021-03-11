import React from 'react';
import {render} from 'react-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import './index.css';
import App from './App';
import {createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux'
import thunk from "redux-thunk";


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(
    app,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { IconContext } from "react-icons";

window.axios = axios;




const store = configureStore();

const jsx = (
    <Provider store={store}>
        <IconContext.Provider value={{ color: "black", className: "icons", style: { verticalAlign: 'middle' } }}>
            <App />
        </IconContext.Provider>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));


serviceWorker.unregister();

import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import flowReducer from '../reducers/flowReducer';

export default () => {
    const store = createStore(combineReducers({
        auth: authReducer,
        flow: flowReducer
    }),applyMiddleware(reduxThunk))

    return store;
}


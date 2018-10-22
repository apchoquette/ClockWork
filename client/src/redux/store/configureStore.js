import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';

export default () => {
    const store = createStore(combineReducers({
        auth: authReducer
    }),applyMiddleware(reduxThunk))

    return store;
}


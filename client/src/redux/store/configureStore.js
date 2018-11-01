import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import activeFlowReducer from '../reducers/activeFlowReducer';
import authReducer from '../reducers/authReducer';
import flowReducer from '../reducers/flowReducer';
import { reducer as formReducer } from 'redux-form';

export default () => {
    const store = createStore(combineReducers({
        auth: authReducer,
        flow: flowReducer,
        form: formReducer,
        activeFlow: activeFlowReducer
    }),applyMiddleware(reduxThunk))

    return store;
}


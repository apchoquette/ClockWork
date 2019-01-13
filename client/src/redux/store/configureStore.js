import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import activeFlowReducer from '../reducers/activeFlowReducer';
import authReducer from '../reducers/authReducer';
import flowReducer from '../reducers/flowReducer';
import { reducer as formReducer } from 'redux-form';
import tasksReducer from '../reducers/tasksReducer';

export default () => {
    const store = createStore(combineReducers({
        auth: authReducer,
        flow: flowReducer,
        form: formReducer,
        activeFlow: activeFlowReducer,
        tasks: tasksReducer
    }),applyMiddleware(reduxThunk))

    return store;
}


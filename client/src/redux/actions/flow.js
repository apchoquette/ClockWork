import axios from 'axios';

//returns all flows
export const fetchFlows = () => async dispatch => {
    const res = await axios.get(`/api/flows`)
    dispatch({type: 'FETCH_FLOWS', payload: res.data})

}
//creates new flow
export const createFlow = (values) => async dispatch => {
    const res = await axios.post(`/api/flows`, values);
    dispatch({type: 'FETCH_FLOWS', payload: res.data})

}
//deletes specific flow
export const deleteFlow = (id) => async dispatch => {
    const res = await axios.delete(`/api/flows/${id}`)
    dispatch({type: 'FETCH_FLOWS', payload: res.data});
}

//fetches individual flow (for use with visibleFlow)
export const fetchFlowById = (id) => async dispatch => {
    const res = await axios.get(`/api/flows/${id}`)
    dispatch({ type: 'FETCH_FLOW_BY_ID', payload: res.data})
    
}
//adds a task to the visible flow
export const addTaskToFlow = (id,task) => async dispatch => {
    const res = await axios.put(`/api/flows/${id}`, task)
    dispatch({ type: 'FETCH_FLOW_BY_ID', payload: res.data })
}

//moves specific task forward in the flow.
export const changeFlowTaskStatus = (id,taskId,stage) => async dispatch => {
    const res = await axios.put(`/api/flows/${id}/${taskId}`, stage);
    dispatch({ type: 'FETCH_FLOW_BY_ID', payload: res.data});
}
//deletes specific task
export const deleteFlowTask = (id,taskId) => async dispatch => {
    
    const res = await axios.delete(`/api/flows/${id}/${taskId}`)
    dispatch({ type: 'FETCH_FLOW_BY_ID', payload: res.data})
}
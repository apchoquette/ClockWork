import axios from 'axios';

export const fetchFlows = () => async dispatch => {
    const res = await axios.get(`/api/flows`)
    dispatch({type: 'FETCH_FLOWS', payload: res.data})

}

export const createFlow = (values) => async dispatch => {
    const res = await axios.post(`/api/flows`, values);
    dispatch({type: 'FETCH_FLOWS', payload: res.data})

}


export const deleteFlow = (id) => async dispatch => {
    const res = await axios.delete(`/api/flows/${id}`)
    dispatch({type: 'FETCH_FLOWS', payload: res.data});
}

export const fetchFlowById = (id) => async dispatch => {
    const res = await axios.get(`/api/flows/${id}`)
    
    dispatch({ type: 'FETCH_FLOW_BY_ID', payload: res.data})
    
}
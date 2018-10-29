import axios from 'axios';

export const fetchFlows = () => async dispatch => {
    const res = await axios.get(`/api/flows`)
    console.log('fetchFlow ->', res.data)
    dispatch({type: 'FETCH_FLOWS', payload: res.data})

}

export const createFlow = (values) => async dispatch => {
    const res = await axios.post(`/api/flows`, values);
    console.log('creating flow', values)
    dispatch({type: 'FETCH_FLOWS', payload: res.data})
}
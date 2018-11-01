
export default (state={},action) => {
    switch(action.type) {
        case 'FETCH_FLOW_BY_ID':
            return action.payload
        default:
            return state
    }
}
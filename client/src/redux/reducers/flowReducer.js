
export default (state=[],action) => {
    switch(action.type) {
        case 'FETCH_FLOWS':
            return action.payload
        default:
            return state
    }
}
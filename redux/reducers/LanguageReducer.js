const LanguageReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_LANGUAGE':
            return{
                ...state,
                mode:action.payload

            }
        default:
            return state
    }
}

export default LanguageReducer
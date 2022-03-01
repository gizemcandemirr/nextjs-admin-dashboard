const setLanguage = language => {

    return {
        type:'SET_LANGUAGE',
        payload:language
    }
}

const getLanguage = () =>{
    return {
        type: 'GET_LANGUAGE'
    }
}

const exportDefault ={
    setLanguage,
    getLanguage
}
export default exportDefault
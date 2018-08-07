import {
    FETCH_QUESTION_DATA_REQUEST,
    FETCH_QUESTION_DATA_SUCCESS,
    SUBMIT_QUESTION_DATA_REQUEST,
    SUBMIT_QUESTION_DATA_SUCCESS,
    FETCH_QUESTION_DATA_ERROR,
    fetchQuestionDataSuccess
} from '../actions/questions';

const initialState = {
    results: {},
    currentPokemon: {},
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUESTION_DATA_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === FETCH_QUESTION_DATA_SUCCESS) {
        // console.log(action.EVENTs)
        return {...state, currentPokemon: action.data, error: null, loading:false }
    }
    else if (action.type === SUBMIT_QUESTION_DATA_REQUEST) {

        return {...state, loading:true}
    }
    else if (action.type === SUBMIT_QUESTION_DATA_SUCCESS) {
        // console.log(action.EVENTs)
        return {...state, results: action.data, error: null, loading:false }
    }
    else if (action.type === FETCH_QUESTION_DATA_ERROR) {

        return {...state, error:action.error, loading:false}
    }
    return state;
}
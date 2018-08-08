import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_QUESTION_DATA_REQUEST = 'FETCH_QUESTION_DATA_REQUEST';
export const fetchQuestionDataRequest = () => ({
    type: FETCH_QUESTION_DATA_REQUEST
});

export const FETCH_QUESTION_DATA_SUCCESS = 'FETCH_QUESTION_DATA_SUCCESS';
export const fetchQuestionDataSuccess = data => ({
    type: FETCH_QUESTION_DATA_SUCCESS,
    data
});

export const SUBMIT_QUESTION_DATA_REQUEST = 'SUBMIT_QUESTION_DATA_REQUEST';
export const submitQuestionDataRequest = () => ({
    type: SUBMIT_QUESTION_DATA_REQUEST
});

export const SUBMIT_QUESTION_DATA_SUCCESS = 'SUBMIT_QUESTION_DATA_SUCCESS';
export const submitQuestionDataSuccess = data => ({
    type: SUBMIT_QUESTION_DATA_SUCCESS,
    data
});

export const RESET_QUESTION_DATA = 'RESET_QUESTION_DATA';
export const resetQuestionData = () => ({
    type: RESET_QUESTION_DATA,
    data: {}
});

export const INCREMENT_QUESTION_NUMBER = 'INCREMENT_QUESTION_NUMBER';
export const incrementQuestionNumber = count => {
    if(count === 9){count = 0}
    else {count += 1}
    return ({type: INCREMENT_QUESTION_NUMBER,
            count
})
}

export const FETCH_QUESTION_DATA_ERROR = 'FETCH_QUESTION_DATA_ERROR';
export const fetchQuestionDataError = error => ({
    type: FETCH_QUESTION_DATA_ERROR,
    error
});

export const fetchQuestionData = id => (dispatch, getState) => {
    console.log(id);
    const authToken = getState().auth.authToken;
    dispatch(fetchQuestionDataRequest());
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({id})
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json(res.question))
    .then(data => {
        console.log(data);
        return dispatch(fetchQuestionDataSuccess(data.question))
    })
    .catch(err => dispatch(fetchQuestionDataError(err)));
};

/*
export const fetchQuestionData = (count) => dispatch => {
    dispatch(fetchQuestionDataRequest())
    return fetch(`${API_BASE_URL}/questions/${count}`, {
        method: 'GET',
        // headers: {
        //     // Provide our auth token as credentials
        //     Authorization: `Bearer ${authToken}`
        // }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchQuestionDataSuccess(data)))
        .catch(err => {
            dispatch(fetchQuestionDataError(err));
        });
};
*/

export const submitQuestionAnswer = answer => dispatch => {
    dispatch(submitQuestionDataRequest())
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(answer)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(submitQuestionDataSuccess(data)))
        .catch(err => {
            dispatch(fetchQuestionDataError(err));
        });
};

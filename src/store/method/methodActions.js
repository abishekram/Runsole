import { ADD_HEADERS, ADD_PARAMS, CHANGE_BODY, CHANGE_HEADER, CHANGE_METHOD, CHANGE_PARAM, CHANGE_URL, DELETE_HEADERS, DELETE_PARAMS, SET_RESPONSE } from "./methodActionTypes";

export const changeMethod = type => ({
    type: CHANGE_METHOD,
    payload: { type }
});

export const changeUrl = url => ({
    type: CHANGE_URL,
    payload: { url }
});

export const changeBody = body => ({
    type: CHANGE_BODY,
    payload: { body }
});

export const changeParam = (id, key, value) => ({
    type: CHANGE_PARAM,
    payload: { id, key, value }
})

export const changeHeader = (id, key, value) => ({
    type: CHANGE_HEADER,
    payload: { id, key, value }
})

export const addParams = { type: ADD_PARAMS }
export const addHeaders = { type: ADD_HEADERS }

export const deleteParams = (id) => ({
    type: DELETE_PARAMS,
    payload: { id }
})

export const deleteHeaders = (id) => ({
    type: DELETE_HEADERS,
    payload: { id }
})

export const setResponse = (response) => ({
    type: SET_RESPONSE,
    payload: { response }
})
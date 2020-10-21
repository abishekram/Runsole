import produce from "immer";
import { ADD_HEADERS, ADD_PARAMS, CHANGE_BODY, CHANGE_HEADER, CHANGE_METHOD, CHANGE_PARAM, CHANGE_URL, DELETE_HEADERS, DELETE_PARAMS, SET_RESPONSE } from "./methodActionTypes";

const initialState = {
    method: 'GET',
    url: '',
    params: [],
    headers: [],
    data: '',
    response: {}
};
const MethodReducer = produce((draft, action) => {
    switch (action.type) {
        case CHANGE_METHOD:
            draft.method = action.payload.type;
            return;

        case CHANGE_URL:
            draft.url = action.payload.url;
            return;

        case CHANGE_BODY:
            draft.data = action.payload.body;
            return;

        case CHANGE_PARAM: {
            const { id, key, value } = action.payload;
            draft.params[id][key] = value;
            return;
        }

        case CHANGE_HEADER: {
            const { id, key, value } = action.payload;
            draft.headers[id][key] = value;
            return;
        }

        case ADD_PARAMS:
            draft.params.push({ key: '', value: '', type: 'query' })
            return;

        case ADD_HEADERS:
            draft.headers.push({ key: '', value: '' })
            return;

        case DELETE_HEADERS:
            draft.headers.splice(action.payload.id, 1);
            return;

        case DELETE_PARAMS:
            draft.params.splice(action.payload.id, 1);
            return;

        case SET_RESPONSE:
            draft.response = action.payload.response;
    }
}, initialState)

export default MethodReducer;
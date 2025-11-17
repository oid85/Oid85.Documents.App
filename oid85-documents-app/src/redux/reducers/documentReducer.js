import {
    FETCH_DOCUMENT_LIST   
} from '../types/documentTypes'

const initialState = {
    documentList: {}
}

export const documentReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DOCUMENT_LIST:
            return {...state, documentList: {...action.payload}}

        default: return state
    }
}
import {
    SAGA_DOCUMENT_LIST,
    FETCH_DOCUMENT_LIST
} from '../types/documentTypes'


export const sagaDocumentList = () => {
    return {
        type: SAGA_DOCUMENT_LIST
    }
}

export const fetchDocumentList = (data) => {
    return {
        type: FETCH_DOCUMENT_LIST,
        payload: data
    }
}

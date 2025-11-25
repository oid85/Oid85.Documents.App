import {
    SAGA_DOCUMENT_CATEGORY_LIST,
    SAGA_CREATE_DOCUMENT_CATEGORY,
    SAGA_EDIT_DOCUMENT_CATEGORY,
    SAGA_DELETE_DOCUMENT_CATEGORY,
    FETCH_DOCUMENT_CATEGORY_LIST,
    FETCH_CURRENT_DOCUMENT_CATEGORY,
    SHOW_CREATE_DOCUMENT_CATEGORY_MODAL,
    HIDE_CREATE_DOCUMENT_CATEGORY_MODAL,
    SHOW_EDIT_DOCUMENT_CATEGORY_MODAL,
    HIDE_EDIT_DOCUMENT_CATEGORY_MODAL
} from '../types/documentCategoryTypes'


export const sagaDocumentCategoryList = () => {
    return {
        type: SAGA_DOCUMENT_CATEGORY_LIST
    }
}

export const sagaCreateDocumentCategory = () => {    
    return {
        type: SAGA_CREATE_DOCUMENT_CATEGORY
    }
}

export const sagaDeleteDocumentCategory = () => {    
    return {
        type: SAGA_DELETE_DOCUMENT_CATEGORY
    }
}

export const sagaEditDocumentCategory = () => {    
    return {
        type: SAGA_EDIT_DOCUMENT_CATEGORY
    }
}

export const fetchDocumentCategoryList = (data) => {
    return {
        type: FETCH_DOCUMENT_CATEGORY_LIST,
        payload: data
    }
}

export const fetchCurrentDocumentCategory = (data) => {
    return {
        type: FETCH_CURRENT_DOCUMENT_CATEGORY,
        payload: data
    }
}

export const showCreateDocumentCategoryModal = () => {
    return {
        type: SHOW_CREATE_DOCUMENT_CATEGORY_MODAL
    }
}

export const hideCreateDocumentCategoryModal = () => {
    return {
        type: HIDE_CREATE_DOCUMENT_CATEGORY_MODAL
    }
}

export const showEditDocumentCategoryModal = () => {
    return {
        type: SHOW_EDIT_DOCUMENT_CATEGORY_MODAL
    }
}

export const hideEditDocumentCategoryModal = () => {
    return {
        type: HIDE_EDIT_DOCUMENT_CATEGORY_MODAL
    }
}

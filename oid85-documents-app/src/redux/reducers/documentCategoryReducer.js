import {
    FETCH_DOCUMENT_CATEGORY_LIST,
    FETCH_CURRENT_DOCUMENT_CATEGORY,
    SHOW_CREATE_DOCUMENT_CATEGORY_MODAL,
    HIDE_CREATE_DOCUMENT_CATEGORY_MODAL,
    SHOW_EDIT_DOCUMENT_CATEGORY_MODAL,
    HIDE_EDIT_DOCUMENT_CATEGORY_MODAL    
} from '../types/documentCategoryTypes'

const initialState = {
    documentCategoryList: {},
    currentDocumentCategory: {},
    createDocumentCategoryModalIsOpened: false,
    editDocumentCategoryModalIsOpened: false
}

export const documentCategoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DOCUMENT_CATEGORY_LIST:
            return {...state, documentCategoryList: {...action.payload}}

        case FETCH_CURRENT_DOCUMENT_CATEGORY:
            return {...state, currentDocumentCategory: {...action.payload}}

        case SHOW_CREATE_DOCUMENT_CATEGORY_MODAL:
            return {...state, createDocumentCategoryModalIsOpened: true}
        
        case HIDE_CREATE_DOCUMENT_CATEGORY_MODAL:
            return {...state, createDocumentCategoryModalIsOpened: false}

        case SHOW_EDIT_DOCUMENT_CATEGORY_MODAL:
            return {...state, editDocumentCategoryModalIsOpened: true}
        
        case HIDE_EDIT_DOCUMENT_CATEGORY_MODAL:
            return {...state, editDocumentCategoryModalIsOpened: false}

        default: return state
    }
}
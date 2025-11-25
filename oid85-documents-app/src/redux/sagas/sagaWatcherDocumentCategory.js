import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchDocumentCategoryList} from '../actions/documentCategoryActions'
import {
    SAGA_DOCUMENT_CATEGORY_LIST,
    SAGA_CREATE_DOCUMENT_CATEGORY,
    SAGA_EDIT_DOCUMENT_CATEGORY,
    SAGA_DELETE_DOCUMENT_CATEGORY
} from '../types/documentCategoryTypes'
import {
    createDocumentCategoryFromApi,
    deleteDocumentCategoryFromApi,
    editDocumentCategoryFromApi,
    getDocumentCategoryListFromApi
} from '../api/documentCategoryApi'

const currentDocumentCategory = (state) => state.documentCategory.currentDocumentCategory

export function* sagaWatcherDocumentCategory() {
    yield takeEvery(SAGA_DOCUMENT_CATEGORY_LIST, sagaWorkerDocumentCategoryList)
    yield takeEvery(SAGA_CREATE_DOCUMENT_CATEGORY, sagaWorkerCreateDocumentCategory)
    yield takeEvery(SAGA_EDIT_DOCUMENT_CATEGORY, sagaWorkerEditDocumentCategory)
    yield takeEvery(SAGA_DELETE_DOCUMENT_CATEGORY, sagaWorkerDeleteDocumentCategory)
}

function* sagaWorkerDocumentCategoryList() {
    let getDocumentCategoryListResult = yield call(getDocumentCategoryListFromApi)    
    yield put(fetchDocumentCategoryList(getDocumentCategoryListResult))
}

function* sagaWorkerCreateDocumentCategory() {         
    let documentCategory = yield select(currentDocumentCategory)        
    yield call(createDocumentCategoryFromApi, documentCategory.name)
    let getDocumentCategoryListResult = yield call(getDocumentCategoryListFromApi)
    yield put(fetchDocumentCategoryList(getDocumentCategoryListResult))
}

function* sagaWorkerEditDocumentCategory() {          
    let documentCategory = yield select(currentDocumentCategory)        
    yield call(editDocumentCategoryFromApi, documentCategory.id, documentCategory.name)
    let getDocumentCategoryListResult = yield call(getDocumentCategoryListFromApi)
    yield put(fetchDocumentCategoryList(getDocumentCategoryListResult))
}

function* sagaWorkerDeleteDocumentCategory() {          
    let documentCategory = yield select(currentDocumentCategory)        
    yield call(deleteDocumentCategoryFromApi, documentCategory.id)
    let getDocumentCategoryListResult = yield call(getDocumentCategoryListFromApi)
    yield put(fetchDocumentCategoryList(getDocumentCategoryListResult))
}
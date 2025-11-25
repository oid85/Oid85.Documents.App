import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchDocumentCategoryList} from '../actions/documentCategoryActions'
import {
    SAGA_DOCUMENT_CATEGORY_LIST
} from '../types/documentCategoryTypes'
import {
    getDocumentCategoryListFromApi
} from '../api/documentCategoryApi'

export function* sagaWatcherDocumentCategory() {
    yield takeEvery(SAGA_DOCUMENT_CATEGORY_LIST, sagaWorkerDocumentCategoryList)
}

function* sagaWorkerDocumentCategoryList() {
    let getDocumentCategoryListResult = yield call(getDocumentCategoryListFromApi)    
    yield put(fetchDocumentCategoryList(getDocumentCategoryListResult))
}

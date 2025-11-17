import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchDocumentList} from '../actions/documentActions'
import {
    SAGA_DOCUMENT_LIST
} from '../types/documentTypes'
import {
    getDocumentListFromApi
} from '../api/documentApi'

export function* sagaWatcherDocument() {
    yield takeEvery(SAGA_DOCUMENT_LIST, sagaWorkerDocumentList)
}

function* sagaWorkerDocumentList() {
    let getDocumentListResult = yield call(getDocumentListFromApi)    
    yield put(fetchDocumentList(getDocumentListResult))
}

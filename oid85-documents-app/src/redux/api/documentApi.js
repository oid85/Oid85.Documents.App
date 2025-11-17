import {sendPostRequest} from './api'

const controller = 'documents'

export const getDocumentListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

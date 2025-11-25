import {sendPostRequest} from './api'

const controller = 'document-categories'

export const getDocumentCategoryListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const createDocumentCategoryFromApi = async (name) => {
    return sendPostRequest(`${controller}/create`, {name})
}

export const editDocumentCategoryFromApi = async (id, name) => {
    return sendPostRequest(`${controller}/edit`, {id, name})
}

export const deleteDocumentCategoryFromApi = async (id) => {
    return sendPostRequest(`${controller}/delete`, {id})
}

import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { documentCategoryReducer } from './documentCategoryReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	documentCategory: documentCategoryReducer
})
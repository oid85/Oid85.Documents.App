import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { documentReducer } from './documentReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	document: documentReducer
})
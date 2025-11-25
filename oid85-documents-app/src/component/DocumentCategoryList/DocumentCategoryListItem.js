import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { fetchCurrentDocumentCategory, showEditDocumentCategoryModal } from '../../redux/actions/documentCategoryActions'

export const DocumentCategoryListItem = ({key, documentCategory}) => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className='document-category-list-item'>
                <div 
                    className='document-category-list-item-name' 
                    key={key}
                    onClick={() => {
                        dispatch(fetchCurrentDocumentCategory({...documentCategory}))
                        }}>{documentCategory.name}</div>
                <button 
                    className='btn btn-outline-link document-category-list-item-button'
                    onClick={() => {
                        dispatch(fetchCurrentDocumentCategory({...documentCategory}))
                        dispatch(showEditDocumentCategoryModal())
                        }}>...</button>
            </div>
        </React.Fragment>
    )
}
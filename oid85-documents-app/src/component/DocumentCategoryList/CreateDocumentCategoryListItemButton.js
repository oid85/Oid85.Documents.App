import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {showCreateDocumentCategoryModal} from '../../redux/actions/documentCategoryActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreateDocumentCategoryListItemButton = () => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <button 
                className='btn btn-outline-primary create-document-category-list-item-button'
                onClick={() => 
                dispatch(showCreateDocumentCategoryModal())
                }>Новая категория</button>
        </React.Fragment>
    )
}
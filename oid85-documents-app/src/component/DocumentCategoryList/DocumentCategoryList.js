import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sagaDocumentCategoryList} from '../../redux/actions/documentCategoryActions'
import Loader from '../Loader/Loader'
import { CreateDocumentCategoryListItemButton } from './CreateDocumentCategoryListItemButton'
import { CreateDocumentCategoryModal } from './CreateDocumentCategoryModal'
import {DocumentCategoryListItem} from './DocumentCategoryListItem'
import { EditDocumentCategoryModal } from './EditDocumentCategoryModal'
import './styles.css'

export const DocumentCategoryList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const documentCategoryList = useSelector(state => state.documentCategory.documentCategoryList)

    useEffect(() => {
        dispatch(sagaDocumentCategoryList())
    }, [])

    return (
        <React.Fragment>
        {
            !documentCategoryList.result || loading
            ? <Loader/>
            :
            <div className='document-category-list'>
                <CreateDocumentCategoryListItemButton />
                {
                    documentCategoryList.result.documentCategories.map((documentCategory, index) => (
                        <DocumentCategoryListItem key = {index} documentCategory = {documentCategory} />
                    ))
                }
                <CreateDocumentCategoryModal />
                <EditDocumentCategoryModal />
            </div>          
        }
        </React.Fragment>                
    )
}
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sagaDocumentList} from '../../redux/actions/documentActions'
import Loader from '../Loader/Loader'
import {DocumentListItem} from './DocumentListItem'
import './styles.css'

export const DocumentList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const documentList = useSelector(state => state.document.documentList)

    useEffect(() => {
        dispatch(sagaDocumentList())
    }, [])

    return (
        <React.Fragment>
        {
            !documentList.result || loading
            ? <Loader/>
            :
            <div className='document-list'>
                {
                    documentList.result.documents.map((document, index) => (
                        <DocumentListItem key = {index} document = {document} />
                    ))
                }
            </div>          
        }
        </React.Fragment>                
    )
}
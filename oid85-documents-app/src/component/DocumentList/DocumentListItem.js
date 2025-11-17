import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const DocumentListItem = ({key, document}) => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className='document-list-item'>
                <div 
                    className='document-list-item-name' 
                    key={key}>{document.name}</div>
            </div>
        </React.Fragment>
    )
}
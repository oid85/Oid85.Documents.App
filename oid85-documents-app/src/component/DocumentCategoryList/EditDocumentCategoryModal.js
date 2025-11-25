import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideEditDocumentCategoryModal, 
    fetchCurrentDocumentCategory,
    sagaEditDocumentCategory,
    sagaDeleteDocumentCategory 
} from '../../redux/actions/documentCategoryActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditDocumentCategoryModal = () => {
    
    const dispatch = useDispatch()
    const currentDocumentCategory = useSelector(state => state.documentCategory.currentDocumentCategory)
    const editDocumentCategoryModalIsOpened = useSelector(state => state.documentCategory.editDocumentCategoryModalIsOpened)

    const customStyles = {
        content: {
          top: '50%',
          left: '50%', 
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',                          
          transform: 'translate(-50%, -50%)'
        }
      };

    return (
        <React.Fragment>
            <div>                
                <Modal
                    isOpen={editDocumentCategoryModalIsOpened}
                    style={customStyles}>
                    <h6>Редактирование категории</h6>
                    <form>
                        <label>Наименование</label>
                        <input 
                            className='form-control edit-document-category-modal-input' 
                            type="text" 
                            defaultValue={currentDocumentCategory.name} 
                            placeholder='Наименование' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentDocumentCategory({...currentDocumentCategory, name: event.target.value})) 
                                }} />
                        <button 
                            className='btn btn-outline-primary edit-document-category-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditDocumentCategory())
                                    dispatch(hideEditDocumentCategoryModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-document-category-modal-delete-button' 
                            onClick={ () => {
                                    dispatch(sagaDeleteDocumentCategory())
                                    dispatch(hideEditDocumentCategoryModal())
                                    }}>Удалить</button>                                    
                        <button 
                            className='btn btn-outline-primary edit-document-category-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditDocumentCategoryModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}
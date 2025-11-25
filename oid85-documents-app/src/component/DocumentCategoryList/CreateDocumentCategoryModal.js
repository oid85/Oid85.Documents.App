import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideCreateDocumentCategoryModal, 
    fetchCurrentDocumentCategory,
    sagaCreateDocumentCategory 
} from '../../redux/actions/documentCategoryActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreateDocumentCategoryModal = () => {
    
    const dispatch = useDispatch()
    const currentDocumentCategory = useSelector(state => state.documentCategory.currentDocumentCategory)
    const createDocumentCategoryModalIsOpened = useSelector(state => state.documentCategory.createDocumentCategoryModalIsOpened)

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
                    isOpen={createDocumentCategoryModalIsOpened}
                    style={customStyles}>
                    <h6>Создать категорию</h6>
                    <form>
                        <label>Наименование</label>
                        <input 
                            className='form-control create-document-category-modal-input' 
                            type="text" 
                            defaultValue='' 
                            placeholder='Наименование' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentDocumentCategory({...currentDocumentCategory, name: event.target.value})) 
                                }} />
                        <button 
                            className='btn btn-outline-primary create-document-category-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaCreateDocumentCategory())
                                    dispatch(hideCreateDocumentCategoryModal())
                                    }}>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary create-document-category-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideCreateDocumentCategoryModal())
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}
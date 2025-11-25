import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import {DocumentCategoryList} from "../DocumentCategoryList/DocumentCategoryList"
import './styles.css'

export const MainScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <DocumentCategoryList />
                </div>
            </div>            
        </React.Fragment>
    )    
}

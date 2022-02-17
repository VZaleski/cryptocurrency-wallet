import React from 'react';
import s from './ModalShoppingWindow.module.css';
import closeImage from '../../../assets/images/close.svg'

const ModalShoppingWindow = () => {
    return <div className={s.modal}>
        <div className={s.content}>
            <h3 className={s.title}>Name</h3>
            <button className={s.closeButton}><img src={closeImage} alt=""/></button>
            <p className={s.description}>Description</p>
            <div className={s.form}>
                <input type="number" min="0"></input>
                <button className={s.addButton}>Add to Cart</button>
            </div>
        </div>
    </div>
}

export default ModalShoppingWindow;
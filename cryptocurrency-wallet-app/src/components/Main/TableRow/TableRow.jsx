import React from 'react';
import s from './TableRow.module.css';
import ModalShoppingWindow from "../ModalShoppingWindow/ModalShoppingWindow";

const TableRow = (props) => {
    console.log(props)
    const handleAction = () => {
        props.changeValueTableRow(!props.valueTableRow);
    }

    return <div className={s.table__row}>
        <div className={s.row__wrapper}>
            <div className={s.row__name}>
                <span className={s.fullName}>BitCoin</span>
                <span className={s.shortName}>BTC</span>
            </div>
            <div className={s.row__price}>
                43721.9$
            </div>
            <div className={s.row__change24h}>
                -1.10%
            </div>
            <div className={s.row__buy}>
                <button onClick={handleAction} className={s.buy__button}>buy</button>
                {props.valueTableRow ? <ModalShoppingWindow /> : null}
            </div>
        </div>
    </div>
}

export default TableRow;
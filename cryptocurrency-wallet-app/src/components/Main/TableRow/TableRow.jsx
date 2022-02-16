import React from 'react';
import s from './TableRow.module.css';

const TableRow = () => {
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
                <button className={s.buy__button}>buy</button>
            </div>
        </div>
    </div>
}

export default TableRow;
import React from 'react';
import s from './Main.module.css';
import TableRowWrapper from "./TableRow/TableRowWrapper";
import ModalShoppingWindow from "./ModalShoppingWindow/ModalShoppingWindow";

const Main = () => {
    /*const maxNumberRow = 5;
    const arrayTableRow = [];
    for (let i = 0; i < maxNumberRow; i++) {
        arrayTableRow.push(<TableRowWrapper/>);
    }*/

    return <main className={s.main}>
        <div className={s.main__table}>
            <TableRowWrapper/>
        </div>
    </main>
}

export default Main;

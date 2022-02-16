import React from 'react';
import s from './Main.module.css';
import TableRow from "./TableRow/TableRow";

const Main = () => {

    const maxNumberRow = 5;
    const arrayTableRow = [];
    for (let i = 1; i < maxNumberRow; i++) {
        arrayTableRow.push(<TableRow />);
    }

    return <main className={s.main}>
        <div className={s.main__table}>
            {arrayTableRow}
        </div>
    </main>
}

export default Main;

import React from 'react';
import s from './Header.module.css';
import logoImage from "../../assets/images/react.svg";
import walletImage from "../../assets/images/wallet.svg";

const Header = () => {
    return <header className={s.header}>
        <div className={s.header__wrapper}>
            <div className={s.header__logo}>
                <img src={logoImage} alt="logo" className={s.logo__image}/>
            </div>
            <div className={s.header__currency}>
                <div className={s.currency}>
                    BTC  43721.9$
                </div>
                <div className={s.currency}>
                    BTC  43721.9$
                </div>
                <div className={s.currency}>
                    BTC  43721.9$
                </div>
            </div>
            <div className={s.header__wallet}>
                <img src={walletImage} alt="wallet" className={s.wallet__image} />
                <span className={s.wallet__balance}>
                134,32 USD +2,38 (1,80 %)
            </span>
            </div>
        </div>
    </header>
}

export default Header;

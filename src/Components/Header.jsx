import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <main className="header">
            <section className="mobileMenuContainer">
                <div className="logoContainer">
                    <img src="./media/images/logga2.png" alt="Hemma Bäst logotype. Logotypens utseende består av en svart fotölj med rosa blommor, en grå lampa och en Hemma Bäst text." height="100%"></img>
                </div>
                <div className="inputWrapper">
                    <FontAwesomeIcon className="inputIcon" icon={faSearch} />
                    <input className="inputField" type="search" role="combobox" maxLength="150" placeholder="Vad letar du efter?" />
                </div>
                <div className='hamburgerMenuContainer'>
                    <FontAwesomeIcon className="hamburgerMenu" icon={faBars} />
                </div>
            </section>
            <section className="mobileUserAndBasketContainer">
                <button className="iconButton">
                    <FontAwesomeIcon className="menuIcon" icon={faUser} />
                    <p className="iconText">Logga in</p>
                </button>
                <button className="iconButton">
                    <FontAwesomeIcon className="menuIcon" icon={faShoppingBasket} />
                    <p className="iconText">Varukorg</p>
                </button>
            </section>
            <section className="headerContainer">
                <div className="logoContainer">
                    <img src="./media/images/logga2.png" alt="Hemma Bäst logotype. Logotypens utseende består av en svart fotölj med rosa blommor, en grå lampa och en Hemma Bäst text." height="100%"></img>
                </div>
                <div className="inputWrapper">
                    <FontAwesomeIcon className="inputIcon" icon={faSearch} />
                    <input className="inputField" type="search" role="combobox" maxLength="150" placeholder="Vad letar du efter?" />
                </div>
                <div className="userAndBasketContainer">
                    <button className="iconButton">
                        <FontAwesomeIcon className="menuIcon" icon={faUser} />
                        <p className="iconText">Logga in</p>
                    </button>
                    <button className="iconButton">
                        <FontAwesomeIcon className="menuIcon" icon={faShoppingBasket} />
                        <p className="iconText">Varukorg</p>
                    </button>
                </div>
            </section>
            <nav className="navbar">
                <Link className="navLink" title="home" to="/">HEM</Link>
                <Link className="navLink" to="/shop">BUTIK</Link>
                <Link className="navLink" to="/aboutUs">OM OSS</Link>
            </nav>
        </main>
    )
}
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <header className="Menu">
            <div className="Menu__container">
                <div className="header__logo">
                    <Link to="/">
                        <img src="/images/slogo.png" />
                    </Link>
                </div>
                <div className="Menu_item">
                    <Link to="/">صفحه اصلی</Link>
                </div>
                <div className="Menu_item">
                    <Link to="/articles">مقالات</Link>
                </div>
                <div className="Menu_item">
                    <Link to="/about">درباره کلینیک</Link>
                </div>
                <div className="Menu_item">
                    <Link to="/surgeries">جراحی ها</Link>
                </div>
            </div>
        </header>
    );
}

export default Menu;

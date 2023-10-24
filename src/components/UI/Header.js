import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                
                <div className="header__phone">
                    <a href="tel:+1234567890">تماس: ۰۹۱۵۲۶۲۵۰۹۵</a>
                    <a href="tel:+0987654321">-- ۰۵۱۳۶۴۱۹۶۴۱</a>
                </div>
                <div className="header__phone">
                    آدرس: مشهد- کوهسنگی ۳- پلاک۳
                </div>
                
            </div>
        </header>
    );
}

export default Header;

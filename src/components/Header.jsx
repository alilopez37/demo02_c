import logo from '../assets/img/upchiapas.jpg';
import '../assets/styles/Header.css';

function Header() {
    return (
        <header>
            <img src={logo} alt="" />
            <span className="header_title">Universidad Politécnica de Chiapas</span>
        </header>
      );
}

export default Header;
import './Header.css'
import Logo from '../../assets/ministry-logo.png';
import Menu from './Menu'

function Header(props){
    return (
        <div className="header">
            <img src={Logo} alt="Logo" width="180px"></img>
            <Menu></Menu>
        </div>
    );
}

export default Header; 
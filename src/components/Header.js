import './Header.css'
import Menu from './Menu'

function Header(){
    return (
        <div className="header">
            <h1>Ministry</h1>
            <Menu></Menu>
        </div>
    );
}

export default Header;
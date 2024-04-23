import {NavLink} from 'react-router-dom';
import './Navbar.css'; // CSS 파일을 import 하세요

function Navbar() {
    const activeStyle = {
        backgroundColor: 'purple',
        color: 'white'
    }

    return (
        <div className="navbar-container">
            <ul>
                <li><NavLink to="/main" style={({isActive}) => isActive? activeStyle: undefined}>HOME</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive? activeStyle: undefined}>로그인</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => isActive? activeStyle: undefined}>소개</NavLink></li>
                <li><NavLink to="/menu" style={({isActive}) => isActive? activeStyle: undefined}>메뉴목록</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
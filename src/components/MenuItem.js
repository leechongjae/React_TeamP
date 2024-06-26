import itemStyle from './MenuItem.module.css';
import {Link} from 'react-router-dom';

function MenuItem({menu}) {
    return (
        <Link to={`/menu/${menu.id}`}>
            <div className={itemStyle.MenuItem}>
                <h3>이름: {menu.name}</h3>
                <h3>가격: {menu.price}</h3>
                <h4>종류: {menu.category.type}</h4>
                <img src={menu.image} style={{ maxWidth: 200, maxHeight: 200}}/>               
            </div>
        </Link>
    );
}

export default MenuItem;
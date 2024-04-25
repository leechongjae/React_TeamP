import {useParams} from 'react-router-dom';
import {getMenuDetail} from '../api/MenuAPI';
import {useEffect, useState} from 'react';

function MenuDetails() {

    const { id } = useParams();
    console.log(id);

    const menus = getMenuDetail(id);

    console.log('menus : ',menus);

    // console.log(menuCode);
    // console.log(getMenuDetail(menuCode));
    /* state 초기값 설정 시 다루려고 하는 객체 또는 배열의 구조를 모두 적어주면 가독성이 올라가고 실수가 줄어든다.*/
    const [menu, setMenu] = useState({
        id: 0,
        name: '',
        category: {type: '', image: ''},
        flavor: [],
        price: 0,
        Information: {},
        image: ''
    });

    useEffect(
        () => {
            console.log('menu : ', menu);
            setMenu(getMenuDetail(id));
        },[]
    );

    return (
        <>
            <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름: {menu.name}</h3>
            <h3>메뉴 가격: {menu.price}</h3>
            <h3>메뉴 종류: {menu.category.type}</h3>
            <h3>메뉴 설명: {`염분 : ${menu.Information.Sodium} 당분 : ${menu.Information.Sugar} 지방 : ${menu.Information.Fat} `}</h3>

            <img src={menu.image} style={{ maxWidth: 500}}/>
        </>
    );
}

export default MenuDetails;
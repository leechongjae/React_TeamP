import {useParams} from 'react-router-dom';
import {getMenuDetail} from '../api/MenuAPI';
import {useEffect, useState} from 'react';

function MenuDetails() {

    const {menuCode} = useParams();
    // console.log(menuCode);
    // console.log(getMenuDetail(menuCode));
    /* state 초기값 설정 시 다루려고 하는 객체 또는 배열의 구조를 모두 적어주면 가독성이 올라가고 실수가 줄어든다.*/
    const [menu, setMenu] = useState({
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail: {}
    });

    useEffect(
        () => {
            setMenu(getMenuDetail(menuCode));
        },[]
    );

    return (
        <>
            <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름: {menu.menuName}</h3>
            <h3>메뉴 가격: {menu.menuPrice}</h3>
            <h3>메뉴 종류: {menu.categoryName}</h3>
            <h3>메뉴 설명: {menu.detail.description}</h3>

            <img src={menu.detail.image} style={{ maxWidth: 500}}/>
        </>
    );
}

export default MenuDetails;
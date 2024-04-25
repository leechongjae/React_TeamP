// import menus from '../data/menu-detail.json';
import menus from '../data/product.json';

// const result = menus;

/* 제발 함수 export합시다. */

/* JSON 파일로부터 전체 메뉴 리스트 반환 */

export function getMenuList(){
    console.log(typeof menus);
    return menus; //json으로 파싱된 데이터를 반환한다
}
/* MenuDetails에서 넘겨준 메뉴코드 값과 일치하는 메뉴 객체를 반환 */
export function getMenuDetail(menuCode) {    
    return menus.filter(menu => menu.id == menuCode)[0];
    
}

export function searchMenu(searchMenuName) {
    return menus.filter(menu => menu.name.match(searchMenuName));
}
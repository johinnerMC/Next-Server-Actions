/*
cookies: cart 
{
    'uuid': 4, //cantidad
    'uuid': 6 
}
*/

import { getCookie, hasCookie, setCookie } from "cookies-next"


const getCookieCart = (): {[id: string]: number} => {

    if(hasCookie('cart')){
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');
        return cookieCart;
    }
    return {}
}

export const addProductToCart = (id: string) => {
    const cookieCart = getCookieCart();

    if(cookieCart[id]){
        cookieCart[id] += 1
    }else {
        cookieCart[id] = 1
    }

    setCookie('cart', JSON.stringify(cookieCart));
}

export const removeProductFromCart = (id: string) => {
    const cookieCart = getCookieCart();
    if(cookieCart[id]){
       delete cookieCart[id];
        setCookie('cart', JSON.stringify(cookieCart));
    }else{
        return
    }
}

export const removeSingleItemFromCart = (id: string) => {
    const cookieCart = getCookieCart();
    if( cookieCart[id] > 1){
        cookieCart[id] --
    }else{
        delete cookieCart[id]
    }
    setCookie('cart', JSON.stringify(cookieCart));
}
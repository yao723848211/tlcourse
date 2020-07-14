//创建localStorage中的key值
export function createKey(name) {
    return window.location.host + "_" + name;
}

//可以对localStorage作一层封装,在这个函数中加个过期时间的概念
//存储的都是毫秒数
export function setItem(key, value, expire) {
    const valueObj = {
        value,
        expire
    }
    window.localStorage.setItem(key, JSON.stringify(valueObj));
}

export function getItem(key) {
    let obj = window.localStorage.getItem(key);
    if (obj) {
        let valueObj = JSON.parse(obj);
        //    判断是否过期
        if (Date.now() - valueObj.expire > 0) {
            //    已经过期了
            return null
        } else {
            return valueObj.value
        }
    } else {
        return null
    }
}
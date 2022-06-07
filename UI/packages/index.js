import Button from './button';
import Badge from './badge';
const components = {
    Button,
    Badge
};
const install = function(Vue) {
    if (install.installed) return; //避免重复安装
    //把所有的key拿出来 遍历所有key值 注册
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    })
};
const API = {
    install,
};
export default API;
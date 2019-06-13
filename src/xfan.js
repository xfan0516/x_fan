import Header from "@/components/common/Header.vue";
import XIcon from "@/components/common/XIcon.vue";
import Footer from "@/components/common/Footer.vue";

const components = {
    Header,
    XIcon,
    Footer
}
const install = function (Vue) {
    if (install.installed) return;

    for (var k in components){
        console.log(k)
        Vue.component(k, components[k]);
    }
   
   
}
if (typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}
const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};
export default API
// module.exports.default = module.exports = components
import Header from "@/components/common/Header.vue";
import XIcon from "@/components/common/XIcon.vue";
import Footer from "@/components/common/Footer.vue";
import Media from "@/components/common/Media.vue";
import Thumbnail from "@/components/common/Thumbnail.vue";
import XCol from "@/components/common/XCol.vue";
import XCell from "@/components/common/XCell.vue";

const components = {
    Header,
    XIcon,
    Footer,
    Media,
    Thumbnail,
    XCol,
    XCell
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
import Header from "@/components/common/Header.vue";
import XIcon from "@/components/common/XIcon.vue";
import XBtn from "@/components/common/XBtn.vue";
import Footer from "@/components/common/Footer.vue";
import Media from "@/components/common/Media.vue";
import Thumbnail from "@/components/common/Thumbnail.vue";
import XCol from "@/components/common/XCol.vue";
import XCell from "@/components/common/XCell.vue";
import Message from "@/components/common/Message";
import Loading from "@/components/common/Loading";
import Badge from "@/components/common/Badge";
import Sidebar from "@/components/common/Sidebar";
import { Confirm, Prompt} from "@/components/common/modal";
import { InputText, InputCheckbox } from "@/components/common/form";

const components = {
    Header,
    XIcon,
    XBtn,
    Footer,
    Media,
    Thumbnail,
    XCol,
    XCell,
    Confirm,
    Prompt,
    Badge,
    Sidebar,
    Loading,
    InputText,
    InputCheckbox
}
const install = function (Vue) {
    if (install.installed) return;

    for (var k in components){
        // console.log(k)
        Vue.component(k, components[k]);
    }

    Vue.prototype.$Message = Message
   
   
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
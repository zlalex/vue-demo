import alLayoutGroup from './al-layout-group';
import alContent from './al-content';
import alFooter from './al-footer';
import alHeader from './al-header';
import alSlidebar from './al-slidebar';

const layoutPageage = [
    alLayoutGroup,
    alContent,
    alFooter,
    alHeader,
    alSlidebar
]

function install(Vue) {
    if (install.installed) {
        return
    }

    layoutPageage.map(layout => Vue.component(layout.name, layout));
}

(typeof window !== 'undefined' && window.Vue) && install(window.Vue);

export default {
    install,
    alLayoutGroup,
    alContent,
    alFooter,
    alHeader,
    alSlidebar
}
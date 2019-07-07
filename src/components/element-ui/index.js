import {
    DatePicker,
    Dialog,
    Menu,
    MenuItem,
    MessageBox,
    Option,
    Pagination,
    Select,
    Submenu,
    Table,
    TableColumn
} from 'element-ui';

const elementUI = [
    DatePicker,
    Dialog,
    Menu,
    MenuItem,
    MessageBox,
    Option,
    Pagination,
    Select,
    Submenu,
    Table,
    TableColumn
];

const install = Vue => {
    if (install.installed) {
        return;
    }

    elementUI.map(element => Vue.component(element.name, element));
}

(typeof window !== 'undefined' && window.Vue) && install(window.Vue);

export default {
    DatePicker,
    Dialog,
    Menu,
    MenuItem,
    MessageBox,
    Option,
    Pagination,
    Select,
    Submenu,
    Table,
    TableColumn,
    install
}
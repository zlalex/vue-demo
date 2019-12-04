import {
  Table,
  TableColumn,
  Message,
  MessageBox,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Select,
  Option,
  DatePicker,
  Input,
  Button,
  Dialog,
  Pagination,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Cascader
} from 'element-ui'

const compontents = [
  Table,
  TableColumn,
  Message,
  MessageBox,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Select,
  Option,
  DatePicker,
  Button,
  Input,
  Dialog,
  Pagination,
  RadioButton,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Cascader
]

const install = Vue => {
  if (install.installed) {
    return
  }

  compontents.map(element => Vue.component(element.name, element))
}

typeof window !== 'undefined' && window.Vue && install(window.Vue)

export default {
  install,
  Message,
  MessageBox
}

<template>
    <div class="al-layout__sliderbar">
        <div class="al-sliderbar__scroll">
            <el-menu
                unique-opened
                background-color="#393d49"
                text-color="#fff">
                <el-submenu 
                    v-for="submenu in menuList"
                    :key="submenu.menu_name"
                    :index="submenu.index">
                    <template slot="title">
                        <i :class="'fa ' + submenu.icon"></i>
                        <span class="al-menu__text">{{submenu.menu_name}}</span>
                    </template>
                    <el-menu-item 
                        v-for="item in submenu.child"                    
                        :key="item.menu_name"
                        :index="item.index"
                        @click="$goRoute(item.url)">
                        <template slot="title">
                            <span>{{item.menu_name}}</span>
                        </template>                    
                    </el-menu-item>
                </el-submenu>
            </el-menu> 
        </div>      
    </div>
</template>
<script>
export default {
    name: 'al-slidebar',
    data(){
        return {
            menuList: []
        }
    },
    
    methods:{
        renderMenu(){
            this.menuList = JSON.parse(sessionStorage.getItem('menu_list'));
        }
    },

    created(){
        this.renderMenu();
    },

    activated(){
        this.renderMenu();
    },

    deactivated(){
        let that = this;
        
        // 清空组件 active 状态
        $tools.cleanData(that.menuList);
    }
}
</script>

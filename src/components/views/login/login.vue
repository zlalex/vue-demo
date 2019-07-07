<template>
    <div class="mes-login al-rel">
        <div class="mes-login__form al-abs al-center__just">
            <h1 class="al-img__just">
                <img src="/static/images/img_login_logo.png" alt="Y-mes">
            </h1>

            <al-tabs-group :panes="panes" v-model="tabsActive" content="true">
                <keep-alive>
                    
                    <!-- 备注: 支持扫码登录时取消注释并完善 v-else 
                    <al-tabs-pane v-if="tabs_active === 'login'"> -->
                    <al-tabs-pane>
                        <al-input size="large" placeholder="请输入用户名" v-model="login_form.account"/>
                        <al-input type="password"  size="large" placeholder="请输入密码" v-model="login_form.password"/>
                        <al-button size="full" @click="login"/>
                    </al-tabs-pane>

                    <!-- 
                    <al-tabs-pane v-else>
                        App
                    </al-tabs-pane> -->
                </keep-alive>
            </al-tabs-group>
        </div>
    </div>
</template>
<script src="./_login.js"></script>
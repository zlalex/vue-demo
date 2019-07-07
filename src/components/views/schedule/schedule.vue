<template>
    <div class="mes-schedule">
        <al-search-group alClass="al-clearfix">
            <div class="mes-schedule__search al-fl">
                <al-input alClass="mes-schedule__input"/>
                <al-input alClass="mes-schedule__input"/>
            </div>
            <al-button text="确认" icon="fa-search" />
            <al-button text="重置" icon="fa-window-restore"/>
        </al-search-group>
            
        <al-tabs-group :panes="panes" v-model="tabsActive" />

        <al-table-group>

        </al-table-group>
    </div>
</template>
<script src="./_schedule.js"></script>

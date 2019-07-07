export default {
    name: 'schedule',

    mounted() {
        this.setCrumbs();
    },

    activated() {
        this.setCrumbs();
    },

    data() {
        return {
            panes: [{
                    text: "全部",
                    value: 'all'
                },
                {
                    text: "已下发",
                    value: 'issue'
                },
                {
                    text: "未下发",
                    value: 'unused'
                }
            ],
            tabsActive: 'all'
        }
    },

    methods: {
        setCrumbs() {
            this.$store.commit('setCrumbs', '计划管理-生产计划');
        }
    },

    watch: {
        tabsActive(newVal, oldVal) {
            console.log(newVal);
        }
    }
}
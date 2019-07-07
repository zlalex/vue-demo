module.exports = {
    loginResponse: {
        "success": true,
        "tipMsg": "成功",
        "data": {
            "menuList": [{
                "menuName": "计划管理",
                "icon": "fa-calendar",
                "menuList": [{
                    "menuName": "生产计划",
                    "url": "/schedule",
                    "icon": null,
                    "menuList": []
                }]
            }, {
                "menuName": "生产执行",
                "icon": "fa-cube",
                "menuList": [{
                    "menuName": "生产监控",
                    "url": "/production",
                    "icon": null,
                    "menuList": []
                }, {
                    "menuName": "工单监控",
                    "url": "/workOrder ",
                    "icon": null,
                    "menuList": []
                }]
            }, {
                "menuName": "库存管理",
                "icon": "fa-stack-exchange",
                "menuList": [{
                    "menuName": "货品管理",
                    "url": "/cargo",
                    "icon": null,
                    "menuList": []
                }, {
                    "menuName": "出入库单",
                    "url": "/warehouse",
                    "icon": null,
                    "menuList": []
                }, {
                    "menuName": "出入库明细",
                    "url": "/warehouseDetail",
                    "icon": null,
                    "menuList": []
                }]
            }, {
                "menuName": "系统管理",
                "icon": "fa-cog",
                "menuList": [{
                    "menuName": "组织管理",
                    "url": "/structure",
                    "icon": null,
                    "menuList": []
                }, {
                    "menuName": "角色管理",
                    "url": "/role",
                    "icon": null,
                    "menuList": []
                }]
            }, {
                "menuName": "信息设置",
                "icon": "fa-info-circle",
                "menuList": [{
                    "menuName": "客户管理",
                    "url": "/custom",
                    "icon": null,
                    "menuList": []
                }, {

                    "menuName": "设备信息",
                    "url": "/equipment",

                    "icon": null,
                    "menuList": []
                }, {
                    "menuName": "产品BOM",
                    "url": "/bom",
                    "icon": null,
                    "menuList": []
                }, {
                    "menuName": "产品SOP",
                    "url": "/sop",
                    "icon": null,
                    "menuList": []
                }, {
                    "menuName": "模具信息",
                    "url": "/mould",
                    "icon": null,
                    "menuList": []
                }, {
                    "menuName": "原材料信息",
                    "url": "/materials",
                    "icon": null,
                    "menuList": []
                }]
            }],
            "data": {
                "empNo": null,
                "empName": "Admin",
            }
        },
        "status": "0"
    }
}
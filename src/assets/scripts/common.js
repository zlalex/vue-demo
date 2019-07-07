import Vue from 'vue';
import elementUI from 'components/element-ui';
import ajax from './ajax';

import {
    CALLBACKDATA,
    CALLBACKMSG,
    STATUSNAME,
    SUCCESSCODE,
} from './config';

import { Tools } from './tools';
const $tools = new Tools();

Vue.prototype.extend = $tools.extend;
Vue.prototype.extend({
    sole: false,
    $tableHeight: $tools.MINHEIGHT,

    $alert(message, callback) {
        $tools.isStr(message) && elementUI.MessageBox.alert(message, '提示', {
            confirmButtonText: '确认',
            callback: action => {
                $tools.isFunc(callback) && callback(action);
            }
        })
    },

    $confirm(message, success, cancel) {
        ($tools.isObj(message) || $tools.isStr(message)) && elementUI.MessageBox.confirm(message.message || message, message.title || '提示', {
            confirmButtonText: message.choose || '确认',
            cancelButtonText: message.another || '取消',
            showClose: $tools.isFalse(message.close) ? false : true,
            type: 'warning'
        }).then(_ => {
            $tools.isFunc(success) && success();
        }).catch(_ => {
            $tools.isFunc(cancel) && cancel();
        })
    },

    $goRoute(path, param) {
        $tools.isObj(param) ? this.$router.push({
            path: path,
            query: param
        }) : this.$router.push(path);
    },

    $notEmpty(obj) {
        let that = this,
            key;

        if (!$tools.isObj(obj)) {
            throw ('argument type error!')
            return false
        }

        for (key in obj) {
            if ($tools.isUndef(obj[key]) || obj[key] === '') {
                that.$alert('请完善表单信息！')
                return false
            }
        }

        return true
    },

    $ajax(param) {
        let that = this;

        if (that.sole) {
            return false
        }

        that.sole = true;
        ajax({
            url: param.url,
            type: param.type,
            data: param.data,
            success(res) {
                let handlerErr = param.error || param.fail || function() {};

                that.sole = false;
                res[STATUSNAME] !== SUCCESSCODE ? that.$alert(res[CALLBACKMSG] || '请求失败！', _ => {
                        handlerErr(res)
                    }) : res.success ?
                    param.success(res[CALLBACKDATA]) : that.$alert(res[CALLBACKMSG] || '请求错误！', _ => {
                        handlerErr(res)
                    });
            },
            fail(res) {
                that.sole = false;
            }
        })
    }
})
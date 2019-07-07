import axios from 'axios';
import configs from './axiosConfig';
import {
    LOCALHOST,
    STATUSNAME,
    SUCCESSCODE,
    ERRORCODE
} from './config';

const fetch = axios.create(configs);

const $fetch = function(option) {
    let url = (LOCALHOST + option.url) || '',
        type = option.type || 'post',
        data = option.data || {},
        success = option.success || function() {},
        fail = option.fail || function() {},
        error = option.error || function(res) {
            alert(res.msg || res.result);
        };

    const callback = function(res) {
        let code = res[STATUSNAME];

        switch (code) {
            case SUCCESSCODE:
                if (res.token) {
                    document.cookie = "sense_token=" + res.token;
                }
                success(res);
                break;
            case ERRORCODE:
                error(res);
                window.location.href = '/';
                break;
            default:
                error(res);
        }
    }

    if (type === 'get') {
        fetch.get(url, {
            params: data
        }).then(res => {
            callback(res.data);
        }).catch(err => {
            fail(err);
        })
    } else {
        fetch.post(url, data).then(res => {
            callback(res.data);
        }).catch(err => {
            fail(err);
        })
    }
}

export default $fetch
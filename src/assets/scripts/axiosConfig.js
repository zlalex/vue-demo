import { LOCATION_HREF } from './config';

export default {
    url: undefined,
    method: 'post', // default
    baseURL: LOCATION_HREF,
    transformRequest: [function(data, headers) {

        // let json = Qs.stringify(data);
        let json = JSON.stringify(data);

        return json;
    }],
    transformResponse: [function(data) {

        return data;
    }],
    headers: {
        "Content-Type": "application/json"
    },
    params: null,
    data: null,
    timeout: 6e4,
    withCredentials: false, // default
    responseType: 'json', // default
    xsrfCookieName: 'XSRF-TOKEN', // default
    xsrfHeaderName: 'X-XSRF-TOKEN', // default
    onUploadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
    },
    onDownloadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
    },
    maxContentLength: 2000,
    validateStatus: function(status) {
        return status >= 200 && status < 300; // default
    },
    maxRedirects: 5 // default
}
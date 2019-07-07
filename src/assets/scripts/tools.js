const _toString = Object.prototype.toString;

const _screen = window.screen;

const isComplex = val => val !== null && typeof val === 'object';

const isArr = val => _toString.call(val).slice(8, -1) === 'Array';

const isObj = val => _toString.call(val).slice(8, -1) === 'Object';

const isStr = val => typeof val === 'string';

const isFunc = val => typeof val === 'function';

const isUndef = val => typeof val === 'undefined';

const isTrue = val => val === true;

// const isFalse = val => !isTrue(val);

const isFalse = val => val === false;

const MINHEIGHT = _screen.height > 760 ? 582 : 290;

const LARHEIGHT = _screen.height > 760 ? 740 : 425;

const COLWIDTH = _screen.width > 1300 ? 200 : 150;

const cloneObj = val => {
    let result, key;

    if (!isComplex(val)) {
        return val
    }

    if (isArr(val)) {
        result = [];
        key = val.length;

        while (key--) {
            result = cloneObj(val[key]);
        }
    } else if (isObj(val)) {
        result = {};

        for (key in val) {
            result[key] = cloneObj(val[key]);
        }
    }

    return result;
}

const cleanData = data => {
    if (!isComplex(data)) {
        return
    }

    if (isArr(data)) {
        data.splice(0, data.length);
    } else if (isObj(data)) {
        let key;

        for (key in data) {
            isComplex(data[key]) ? cleanData(data[key]) : data[key] = undefined;
        }
    }
}

// 
const animate = function(element, descriptor, time, callback) {
    /**
     * @param element {Document Object Model}: target object;
     * @param descriptor {Object}: element descriptor;
     * @param time {Number, Function}: animation time or end handle;
     * @param callback {Function}: animation end handle;
     */

    let _toString = Object.prototype.toString;
    let _getComputedStyle = window.getComputedStyle;
    let _time;

    if (element.nodeType !== 1) {
        throw ('target is not document object model!');
        return
    }

    if (_toString.call(descriptor).slice(8, -1) !== 'Object') {
        throw ('descriptor must be a object!');
        return
    }

    switch (_toString.call(time).slice(8, -1)) {
        case 'Function':
            callback = time;
            _time = 20;
            break
        case 'Number':
            _time = time;
            break
        case 'Undefined':
            _time = 20;
            break
        default:
            throw ('time in arguments is not a number!')
            return
    }

    element.alTimer && clearInterval(element.alTimer);

    function animation() {
        let flag = true;
        let key, current, target, step;

        for (key in descriptor) {
            target = descriptor[key];

            switch (key) {
                case 'zIndex':
                    element.style.zIndex = target;
                    break
                case 'opacity':
                    current = _getComputedStyle(element)['opacity'];

                    current *= 1e3;
                    target *= 1e3;

                    step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);

                    current += step;
                    element.style['opacity'] = current / 1e3;

                    current !== target && (flag = false);
                    break
                default:
                    current = _getComputedStyle(element)[key];
                    current = parseInt(current);

                    step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);

                    current += step;
                    element.style[key] = current + "px";

                    current !== target && (flag = false);
            }
        }

        if (flag) {
            clearInterval(element.alTimer);
            _toString.call(callback).slice(8, -1) === 'Function' && callback();
        }
    }

    element.alTimer = setInterval(animation, _time);
}

const extend = function(value, from) {
    let key;

    from = from || this;
    for (key in value) {
        from[key] = value[key];
    }
}

const forEach = function(val, callback) {
    let len = val.length;

    while (len--) {
        callback.call(val[len], val[len], len);
    }
}

const getUrlParams = function(urlSearch) {
    let _toString = Object.prototype.toString,
        result = {};

    if (_toString.call(urlSearch).slice(8, -1) !== 'String') {
        return urlSearch
    }

    urlSearch = urlSearch.slice(1).split('&');

    urlSearch.map(el => {
        el = el.split('=');
        result[el[0]] = el[1];
    })

    return result;
}

function getDate(symbol) {
    let date = new Date(),
        dateStr = '',
        result = {};

    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        today = date.getDate();

    let hours = date.getHours(),
        minit = date.getMinutes(),
        second = date.getSeconds();

    let weekDay = date.getDay();

    symbol = symbol || '/';
    dateStr = year + symbol + month + symbol + today +
        ' ' + hours +
        ':' + minit +
        ':' + second;

    result.date = dateStr;
    result.weekDay = weekDay;

    return result
}

const toNumber = function(val) {
    let num = val - 0;

    if (!isNaN(num)) {
        return num;
    } else {
        throw ('not a number');
        return val;
    }
}


function Tools() {}

Tools.prototype.extend = extend;

Tools.prototype.extend({
    isComplex,
    isArr,
    isObj,
    isStr,
    isFunc,
    isUndef,
    isTrue,
    isFalse,
    cloneObj,
    cleanData,
    MINHEIGHT,
    LARHEIGHT,
    COLWIDTH,
    animate,
    forEach,
    getUrlParams,
    getDate,
    toNumber,
})

export {
    Tools,
    animate,
    extend,
    forEach,
    getUrlParams,
    getDate,
    toNumber
}
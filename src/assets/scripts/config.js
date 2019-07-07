// -- Location Setting --
// const LOCATION_HREF = 'http://192.168.168.106:8080/';
const LOCATION_HREF = 'http://localhost:3001/';

const LOCALHOST = LOCATION_HREF + '';

// -- RegEx Object --
const TELREG = /^[1][3,4,5,7,8][0-9]{9}$/;

const MAILREG = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

// -- Request Response Setting --
const CALLBACKDATA = 'data';

const CALLBACKMSG = 'tipMsg';

const STATUSNAME = 'status';

const SUCCESSCODE = '0';

const ERRORCODE = '1';

export {
    LOCATION_HREF,
    LOCALHOST,
    TELREG,
    MAILREG,
    CALLBACKDATA,
    CALLBACKMSG,
    STATUSNAME,
    SUCCESSCODE,
    ERRORCODE
}
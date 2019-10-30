import defaults from 'superagent-defaults';
const superagent = defaults();

const getUserSessionKey = () => {
    let nameEQ = "UserSessionKey=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

const setUserSessionKey = (token) => {
    document.cookie = "UserSessionKey=" + token + ';path=/';
}

const getDeviceSessionKey = () => {
    let nameEQ = "DeviceSessionKey=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const setDeviceSessionKey = (DeviceSessionKey) => {
    document.cookie = "DeviceSessionKey=" + DeviceSessionKey + ';path=/';
}

const clearUserSessionKey = (forceClear, IE = false) => {
    if (forceClear) {
        document.execCommand("ClearAuthenticationCache");
    } else if (IE) {
        document.cookie = "UserSessionKey=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
    } else {
        document.cookie = "UserSessionKey=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
}

const clearDeviceSessionKey = (forceClear, IE = false) => {
    if (forceClear) {
        document.execCommand("ClearAuthenticationCache");
    } else if (IE) {
        document.cookie = "DeviceSessionKey=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
    } else {
        document.cookie = "DeviceSessionKey=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
}

const AuthToken = {
    superagent,
    setUserSessionKey,
    getUserSessionKey,
    clearUserSessionKey,
    getDeviceSessionKey,
    setDeviceSessionKey,
    clearDeviceSessionKey
};

export default AuthToken;

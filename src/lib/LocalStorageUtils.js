const setGuarantorId = (guarantorId) => {
    localStorage.setItem('GuarantorId', guarantorId);
}

const getGuarantorId = () => {
    return localStorage.getItem('GuarantorId');
}

const setEmailId = (emailId) => {
    localStorage.setItem('emailId', emailId);
}

const getEmailId = () => {
    return localStorage.getItem('emailId');
}

const setUsername = (username) => {
    localStorage.setItem('UserName', username);
}

const getUsername = () => {
    return localStorage.getItem('UserName');
}

const LocalStorageUtils = {
    setGuarantorId,
    getGuarantorId,
    setEmailId,
    getEmailId,
    setUsername,
    getUsername
}

export default LocalStorageUtils;
const urlValidation = (url) => {
    let isValid = false;

    const expression =
        /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi; //eslint-disable-line
    try {
        const regexp = new RegExp(expression);
        if (regexp.test(url)) {
            isValid = true;
        } else {
            isValid = false;
        }
    } catch (error) {
        return isValid;
    }
    return isValid;
};

export default urlValidation;

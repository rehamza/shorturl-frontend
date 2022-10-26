import baseUrl from '../constant/baseUrl';

export const get = async (endPoint, query) => {
    let res;
    try {
        let url = `${baseUrl}/${endPoint}`;
        if (query) {
            Object.keys(query).forEach((e) => {
                url = `${url}/?${e}=${query[e]}`;
            });
        }

        res = await fetch(url);
    } catch (e) {
        console.error(e);
    }
    return res && res.json();
};

export const post = async (endPoint, data, query) => {
    let res;
    try {
        let url = `${baseUrl}/${endPoint}`;
        if (query) {
            Object.keys(query).forEach((e) => {
                url = `${url}/?${e}=${query[e]}`;
            });
        }
        let body = {};
        if (data) {
            body = JSON.stringify(data);
        }

        res = await fetch(url, {
            method: 'POST',
            body,
            headers: {
                'Content-type': 'application/json',
            },
        });
    } catch (e) {
        console.error(e);
    }
    return res && res.json();
};


/* eslint no-unused-vars: 1 */

import React, { useCallback, useState } from 'react';
import { post } from '../utils/fetchAPIs';
import urlValidation from '../utils/urlValidation';

const ShortenUrlForm = () => {
    const [value, setValue] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');

    const createShortUrl = async (longUrl) => {
        const isValid = urlValidation(longUrl);
        if (isValid) {
            const res = await post('create-shortUrl', {
                longUrl,
            });
            if (res.status_code === "200") {
                setShortUrl(res.data);
                navigator.clipboard.writeText(res.data);
            } else {
                setError('some network issue');
            }
        } else {
            setError('Please provide valid url');
        }
    };

    const onChange = useCallback(
        (e) => {
            setValue(e.target.value);
        },
        [setValue],
    );

    const onSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            setError('');
            if (!value) {
                setError('Please provide url');
            } else {
                await createShortUrl(value);
            }
        },
        [value],
    );

    return (
        <form onSubmit={onSubmit} className="urlForm">
            <label htmlFor="shorten" className="labelInput">
                Url:
                <input
                    placeholder="Url to shorten"
                    id="shorten"
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
            <input type="submit" value="Shorten and copy URL" />
            <div className="Error">{error}</div>
            <div>{shortUrl && `${shortUrl} --- copied!`}</div>
        </form>
    );
};

export default ShortenUrlForm;

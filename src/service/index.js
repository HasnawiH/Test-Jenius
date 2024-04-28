import callAPI from '../config';

let url_api = 'https://contact.herokuapp.com';

export async function getAllContact(params) {
    const url = `${url_api}/contact`;

    return callAPI({
        url,
        method: 'GET',
        params
    });
}
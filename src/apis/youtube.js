/*jslint esnext: true*/

import axios from 'axios';

const KEY = 'AIzaSyD53sOYOiKvEVwWqq28p27xOlzKNplGjqA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,

    }
});
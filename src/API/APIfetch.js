import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_key = '3c9d5ebdb77bf50a9fd1464973f5b456';

export const APIfetch = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_key,
        }
    });

    return data;
}
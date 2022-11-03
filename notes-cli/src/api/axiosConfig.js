import axios from "axios";
import config from "../glbconfig.json";

const getaxios = axios.create({
    baseUrl: config.apiUrl,
    headers: {
        'Content-Type': 'application/json',
        KeyAPI: config.apiKey,
    }
});

export default getaxios;
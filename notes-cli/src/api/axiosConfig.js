import axios from "axios";
import config from "../glbconfig.json";

const BaseUrl = config.apiUrl;

const getaxios = axios.create({
    baseUrl: BaseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default getaxios;
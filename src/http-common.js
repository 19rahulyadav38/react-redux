import axios from "axios";

const baseURL = "https://api.disneyapi.dev/"

export default axios.create({
    baseURL,
    headers: {
        "Content-type": "application/json"
    }
})
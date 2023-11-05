import axios from 'axios'

const apiKey = '1e9651c55e0640cc8b81792c9b83f5a3'
const baseUrl = 'https://api.themoviedb.org/3'
export const imageUrl = 'https://image.tmdb.org/t/p/original'

const apiAxios = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: apiKey,
    }
})

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam))
}
export default apiAxios
export { apiKey, fetchDataFromServer}
import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com/'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '8d8a1e7778msh23af0ecfed5ce9fp1947f4jsna304592e1733'
          }
    })
    return data
}
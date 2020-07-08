const apiKey = 'yZ0RG4RZhg0BTSjNfJsTlziziXLOt5gG';

export default function getGifs( {keyWord} ) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=25&offset=0&rating=G&lang=en`
    
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response
            if (Array.isArray(data)) {
                const gifs = data.map(image => {
                    const { images, title, id } = image
                    const { url } = images.downsized_medium
                    return { title, id, url }
                })
                return gifs
            }
        })
}
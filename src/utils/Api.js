export const getCard = (key, tag) => {
    return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((res) => res.json())
}
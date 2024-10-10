export async function queryPhotos(query) {
    const ACCESS_Key = '5cFMaqb3aoiYmL9u6K1hRiAHmVPEqE7cfWBiJPmVW0A';
    const url = `https://api.unsplash.com/search/photos?client_id=${ACCESS_Key}&query=${query}`
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}
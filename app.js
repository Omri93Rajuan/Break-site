// פונקציה זו תבקש תמונה חדשה של חתול מ-API
async function getRandomCat() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    try {
        const response = await axios.get(apiUrl);

        const catImageUrl = response.data[0].url;

        // יצירת אלמנט תמונה והוספתה ל-DOM
        const catImageElement = document.createElement('img');
        catImageElement.src = catImageUrl;
        catImageElement.alt = 'Random Cat';

        const catImagesDiv = document.getElementById('catImages');
        catImagesDiv.innerHTML = ''; // ניקוי התוכן הקודם
        catImagesDiv.appendChild(catImageElement);
    } catch (error) {
        console.error('Failed to fetch cat image:', error);
    }
}

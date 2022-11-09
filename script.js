//Dom節點
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = '0GTSu1oDSnKJPFm_rsOCofJg28-JHVep3-LjaodnRoc';
const apiUrl = `https://api.unsplash.com/photos/random/
?client_id=${apiKey}&count=${count}`;

//Create Elements ForLInks & Photos, Add to DOM
function displayPhotos(){
    //Run functino for each object in photosArray
    photosArray.forEach(photo => {
        //Create <a>
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('taget', '_blank')
        //Create <img>
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        //Put <img> inside <a>,then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
        
    })
}

//Get photos from Unsplash API
async function getPhotots() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error
    }
}


//On Load 
getPhotots();
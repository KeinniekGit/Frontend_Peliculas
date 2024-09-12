const url= "https://backend-peliculas-0667.onrender.com/api/"

function sendRequest(endPoint, metod, data){
    let request = new XMLHttpRequest();
    request.open(metod, url+endPoint);
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data ? JSON.stringify(data): null);
    return request
}
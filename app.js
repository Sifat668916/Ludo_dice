function rolldice ()  {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imgsource = "img/" + randomNumber + ".png";
    document.getElementById('imagess').src = imgsource;
}
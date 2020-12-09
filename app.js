let hiddenElements = document.querySelectorAll('label, input, button')


for (elements of hiddenElements) {
    elements.classList.add("hidden");
}


for (i = 1; i <= 5; i++) {
    let img = document.createElement('img');
    img.src = ('images/pic' + i + '.jpg');
    document.getElementById("thumb-bar").appendChild(img);
}


document.getElementById("thumb-bar").addEventListener("mouseenter",function(e){
    elements.classList.remove("hidden")

    currentElement = e.target
    imageDisplay = document.getElementsByClassName("displayed-img")
    imageDisplay[0].src = (currentElement.src)
}, true)

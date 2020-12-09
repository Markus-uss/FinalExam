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
    for (elements of hiddenElements) {
        elements.classList.remove("hidden");
    }

    currentElement = e.target
    imageDisplay = document.getElementsByClassName("displayed-img")
    imageDisplay[0].src = (currentElement.src)
}, true)


document.getElementsByTagName("button")[0].addEventListener("click",function(){
    inputField = document.getElementsByTagName("input")
    if (inputField[0].value == "blur") {
        imageDisplay[0].src = imageDisplay[0].src.replace(".jpg","B.jpg")
    } else {
        alert(inputField[0].value + " is not a valid input.")
    }
    inputField[0].value = ''
})
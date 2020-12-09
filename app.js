let hiddenElements = document.querySelectorAll('label, input, button')
console.log(hiddenElements)
console.log('testing')


for (elements of hiddenElements) {
    elements.classList.add("hidden");
}


for (i = 1; i <= 5; i++) {
    let img = document.createElement('img');
    img.src = ('images/pic' + i + '.jpg');
    document.getElementById("thumb-bar").appendChild(img);
}
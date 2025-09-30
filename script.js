
let fVisibleUl = document.querySelector('#f-visible');
let eVisibleUl = document.querySelector('#e-visible');
let hVisibleUl = document.querySelector('#h-visible');
let bVisibleUl = document.querySelector('#b-visible');
let fashionCategory = document.querySelector('#fashion');
let electronicsCategory = document.querySelector('#electronics');
let homeCategory = document.querySelector('#furniture');
let beautyCategory = document.querySelector('#beauty');

function classToggler(container,childContainer,className) {
    container.addEventListener('mouseenter', () => {
    childContainer.classList.add(className);});
    container.addEventListener('mouseleave', () => {
    childContainer.classList.remove(className);});
}
classToggler(fashionCategory, fVisibleUl, 'first-ul');
classToggler(electronicsCategory, eVisibleUl, 'first-ul');
classToggler(homeCategory,hVisibleUl,'first-ul');
classToggler(beautyCategory,bVisibleUl,'first-ul');

let progressDivArray = document.querySelectorAll(".dot");
let progressBarArray = document.querySelectorAll(".inner");

function cycleClass(nodes, className, interval = 2000) {
    let index = 0;
    setInterval(() => {
        nodes.forEach((node, i) => {
            if (i === index) {
                node.classList.add(className);
            } else {
                node.classList.remove(className);
            }
        });
        index = (index + 1) % nodes.length;
    }, interval);
}

cycleClass(progressDivArray, 'progress-div');
cycleClass(progressBarArray, 'progress-bar'); 

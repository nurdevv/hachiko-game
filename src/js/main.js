const box = document.getElementById("dog");
const height = 200;
const width = 300;

const game = setInterval(() => {
        let randY = Math.floor((Math.random() * height) + 1);
        let randX = Math.floor((Math.random() * width) + 1);
        box.style.transform = `translate(${randX}px, ${randY}px)`;
}, 3000)
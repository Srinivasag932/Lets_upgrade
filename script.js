function changeColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FFD700"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
        
        const star = document.createElement("div")
        star.className = "star";
        star.style.width = "0.1px";
        star.style.height = "0.1px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animation = `pulse ${Math.random() * 3 + 2}s infinite ease-in-out`;
        container.appendChild(star);

    }
}

createStars();



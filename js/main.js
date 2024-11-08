let theme = localStorage.getItem("theme");

if (theme != null) {
    if (theme == "white") {
        const checkbox = document.querySelector("#theme");
        checkbox.setAttribute('checked', 'true');
        document.querySelector("body").classList.add("white")
    }
    
    if (theme == "black") {
        document.querySelector("body").classList.add("black")
    }
} else {
    localStorage.setItem("theme", "white")
    document.querySelector("body").classList.add("white")
    const checkbox = document.querySelector("#theme");
    checkbox.setAttribute('checked', 'true');
}

document.getElementById('theme').onclick = function() {
    let themeChoice = document.querySelector("body").className;
    if(themeChoice == "white") {
        document.querySelector("body").classList.remove("white")
        document.querySelector("body").classList.add("black")
        localStorage.setItem("theme", "black")
    } else {
        document.querySelector("body").classList.remove("black")
        document.querySelector("body").classList.add("white")
        localStorage.setItem("theme", "white")
    }
}

const parallax = document.querySelector('.fullscreen');

function isMobile() {
    return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

if(!isMobile()) {
    window.addEventListener('mousemove', (e) => {
        const xPos = e.clientX / window.innerWidth;
        const yPos = e.clientY / window.innerHeight;
    
    
        const xOffset = (xPos - 0.5) * 30;
        const yOffset = (yPos - 0.5) * 30;
    
        parallax.style.backgroundPosition = `${50 + xOffset}% ${50 + yOffset}%`;
    });
}

document.getElementById('share').onclick = function() {
    navigator.clipboard.writeText(window.location.href)
    const notification = document.querySelector(".notification");
    notification.style.top = "20px"
    setTimeout(() => {
        notification.style.top = "-70px"
    }, 2300);
}
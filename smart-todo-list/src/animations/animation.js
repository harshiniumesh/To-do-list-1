function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transition = "opacity 0.5s ease-in";
    element.style.display = "block";

    setTimeout(() => {
        element.style.opacity = 1;
    }, 10);
}

function fadeOut(element, callback) {
    element.style.opacity = 1;
    element.style.transition = "opacity 0.5s ease-out";

    setTimeout(() => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = "none";
            if (callback) callback();
        }, 500);
    }, 10);
}

function slideIn(element) {
    element.style.transform = "translateY(-20px)";
    element.style.opacity = 0;
    element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    element.style.display = "block";

    setTimeout(() => {
        element.style.transform = "translateY(0)";
        element.style.opacity = 1;
    }, 10);
}

function slideOut(element, callback) {
    element.style.transform = "translateY(0)";
    element.style.opacity = 1;
    element.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    setTimeout(() => {
        element.style.transform = "translateY(-20px)";
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = "none";
            if (callback) callback();
        }, 500);
    }, 10);
}
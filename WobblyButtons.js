function wobblyButtonsInit(
    height = "16px",
    width = "16px",
    bigHeight = "50px",
    bigWidth = "50px",
    opacity = "75%",
    bigOpacity = "25%",
    backgroundColor = "#000000aa",
    boxShadow = "0 0 6px #000000",
    startStopDuration = "0.2s",
    zIndex = "2000",
    borderRadius = "50%",
    bigBorderRadius = "25px",
    transition = "width 0.3s, height 0.3s, border-radius 0.3s, opacity 0.3s, background-color 0.3s"
) {
    const pointer = document.createElement("div");
    pointer.style.pointerEvents = "none";
    pointer.style.backgroundColor = backgroundColor;
    pointer.style.boxShadow = boxShadow;
    pointer.style.borderRadius = borderRadius;
    pointer.style.height = height;
    pointer.style.width = width;
    pointer.style.transition = transition;
    pointer.style.opacity = opacity;

    const pointerContainer = document.createElement("div");
    pointerContainer.setAttribute("id", "pointer-container");
    pointerContainer.style.display = "flex";
    pointerContainer.style.alignItems = "center";
    pointerContainer.style.justifyContent = "center";
    pointerContainer.style.height = "100vh";
    pointerContainer.style.width = "100vw";
    pointerContainer.style.position = "fixed";
    pointerContainer.style.pointerEvents = "none";
    pointerContainer.style.zIndex = zIndex;

    pointerContainer.appendChild(pointer);
    document.documentElement.appendChild(pointerContainer);

    document.querySelectorAll(".wobbly-button").forEach(el => {
        el.style.transition = "transform " + startStopDuration
        el.style.transform = "translate(0, 0)"

        container = el.closest(".wobbly-button-container");
        container.style.width = "fit-content"

        el.addEventListener("mouseenter", () => {
            setTimeout(() => {
                el.style.transition = "transform 0s"
            }, 200)
        })
        el.addEventListener("mouseleave", () => {
            el.style.transition = "transform " + startStopDuration
            setTimeout(() => {
                el.style.transform = "translate(0, 0)"
            }, 20);
        })
    })

    mousePositionX = 0
    mousePositionY = 0

    document.addEventListener('mousemove', async function (e) {
        mousePositionX = e.clientX;
        mousePositionY = e.clientY;

        try {
            let element = e.target.closest(".wobbly-button")
            parent = e.target.closest(".wobbly-button-container")
            parentWidth = window.getComputedStyle(parent).width
            parentHeight = window.getComputedStyle(parent).height

            nx = parent.getBoundingClientRect().left + parseInt(parentWidth.slice(0, -2)) / 2;
            ny = parent.getBoundingClientRect().top + parseInt(parentHeight.slice(0, -2)) / 2;
            distX = (mousePositionX - nx) / 1.5;
            distY = (mousePositionY - ny) / 1.5;
            element.style.transform = "translate(" + distX + "px," + distY + "px)";

            pointer.style.borderRadius = `${parseInt(parentWidth.slice(0, -2)) < parseInt(parentHeight.slice(0, -2)) ? parseInt(parentWidth.slice(0, -2)) / 2 : parseInt(parentHeight.slice(0, -2)) / 2}px`
            pointer.style.width = `${parseInt(parentWidth.slice(0, -2))}px`
            pointer.style.height = `${parseInt(parentHeight.slice(0, -2))}px`
            pointer.style.opacity = bigOpacity
        } catch {
            let element = e.target.closest("button, a")
            if (element === null) {
                pointer.style.borderRadius = borderRadius
                pointer.style.width = width
                pointer.style.height = height
                pointer.style.opacity = opacity
            } else {
                pointer.style.borderRadius = bigBorderRadius
                pointer.style.width = bigWidth
                pointer.style.height = bigHeight
                pointer.style.opacity = bigOpacity
            }
        }
        const pointerContainerHeight = parseInt(window.getComputedStyle(pointerContainer).height.slice(0, -2));
        const pointerContainerWidth = parseInt(window.getComputedStyle(pointerContainer).width.slice(0, -2));
        pointerContainer.style.left = `${mousePositionX - pointerContainerWidth / 2}px`;
        pointerContainer.style.top = `${mousePositionY - pointerContainerHeight / 2}px`;
    });
}
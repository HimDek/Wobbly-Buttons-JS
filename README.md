<p align="center">
 <a href="https://himdek.com/Wobbly-Buttons-JS"><h1 align="center"><span id="repo-name">Wobbly-Buttons-JS</span></h1></a>
 <p id="repo-subtitle" align="center">A native JavaScript library to make your buttons wobble on hover</p>
</p>

<h3 id="repo-desc">
    You can watch this effect live all over my <a href="https://himdek.com/Wobbly-Buttons-JS">website</a>.
</h3>
<h3>Or test it yourself in <a href="https://jsfiddle.net/HimDek/98abx10z/">this fiddle</a></h3>

## Usage:

* To use <span id="repo-title">Wobbly Button JS</span>, first add the following inside the <body> of your HTML document:
    ``` HTML
        <script src="https://himdek.com/Wobbly-Buttons-JS/WobblyButtons.js"></script>
        <script>
            addEventListener("DOMContentLoaded", (event) => {
                wobblyButtonsInit();
            });
        </script>
    ```

### Example:
* HTML:
    ``` HTML
        <div class="wobbly-button-container">
            <button class="wobbly-button" style="padding: 1rem; background-color: #00000000; border: none;">Button</button>
        </div>
    ```
* Result <span class="d-none">(will work in <a href="https://himdek.com/Wobbly-Buttons-JS">website</a>)</span>:
        <div class="wobbly-button-container" style="width: fit-content">
            <button class="wobbly-button" style="padding: 1rem; background-color: #00000000; border: none;">Button</button>
        </div>

### Options:
* Default Values of arguments:
    ``` JS
    wobblyButtonsInit(
        height = "16px", // height of the pointer
        width = "16px", // width of the pointer
        bigHeight = "50px", // height of the pointer when hovering other elements
        bigWidth = "50px", // width of the pointer when hovering other elements
        opacity = "75%", // opacity of the pointer
        bigOpacity = "25%", // opacity of the pointer when hovering
        backgroundColor = "#000000aa", // color of the pointer
        boxShadow = "0 0 6px #000000", // box-shadow of the pointer
        startStopDuration = "0.2s", // animation duration for staring or stopping the wobble effect on mouse enter or leave 
        zIndex = "2000", // z-index of pointer. Increase if pointer is not on top of all other elements in your document.
        borderRadius = "50%", // border-radius of the pointer
        bigBorderRadius = "25px", // border-radius of the pointer when hovering other elements
        transition = "width 0.3s, height 0.3s, border-radius 0.3s, opacity 0.3s, background-color 0.3s" // transition for pointer
    )
    ```
    * Change any values you want and use <a href="#usage">here</a>

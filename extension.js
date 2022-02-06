/**
 * Creating div elements and setting their class name and
 * appending it to the document.
 */
const mouse_highlighter = document.createElement("div");
mouse_highlighter.setAttribute("class", "mouse-highlighter");
const mouse_pointer = document.createElement("div");
mouse_pointer.setAttribute("class", "mouse-highlighter__mouse-pointer");

mouse_highlighter.appendChild(mouse_pointer);
document.body.appendChild(mouse_highlighter);

/**
 * Event listener method for mousemove and keydown for 
 * manipulating the mouse-pointer and mouse-highlighter.
 */
window.addEventListener("mousemove", mouseMove);
window.addEventListener("keydown", onKeyDownPress);

function mouseMove(e) {
    // console.log("x " + e.clientX);
    // console.log("y " + e.clientY);

    let x_axis = e.clientX;
    let y_axis = e.clientY;

    /**
     * Moves the mouse-pointer round according to the x and y values that
     * set to the mouse-pointer round.("left" and "top" css property).
     */
    mouse_pointer.style.left = x_axis + "px";
    mouse_pointer.style.top = y_axis + "px";
}

function onKeyDownPress(evnt) {
    // console.log(evnt);
    mouse_pointer_height = mouse_pointer.clientHeight;
    mouse_pointer_width = mouse_pointer.clientWidth;

    /**
     * If "shift" key and "c" or "shift" key and "v" is pressed simultaneously
     * it toggles the display property of mouse-highlighter to "none" and "block"
     * respectively
     */
    if (evnt.shiftKey && evnt.keyCode === 67) { //Shift key + c
        mouse_highlighter.style.display = "none";
    }
    else if (evnt.shiftKey && evnt.keyCode === 86) { //Shift key + v
        mouse_highlighter.style.display = "block";
    }
    /**
     * If "shift" key and "x" or "shift" key and "z" is pressed simultaneously 
     * it increases or decreases the size of mouse-pointer round respectively.
     */
    else if (evnt.shiftKey && evnt.keyCode === 88) { //Shift key + x
        mouse_pointer.style.width = mouse_pointer_width - 20 + "px";
        mouse_pointer.style.height = mouse_pointer_height - 20 + "px";
    }
    else if (evnt.shiftKey && evnt.keyCode === 90) { //Shift key + z
        mouse_pointer.style.width = mouse_pointer_width + 20 + "px";
        mouse_pointer.style.height = mouse_pointer_height + 20 + "px";
    }
}

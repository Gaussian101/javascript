let eventKey = document.getElementById("content1")
let eventCode = document.getElementById("content2")
let eventWhich = document.getElementById("content3")
let eventKeyCode = document.getElementById("keycode")


function keycode(){
    let key = event.key;
    let code = event.code;
    let which = event.which;
    let keyCode = event.keyCode
    eventKey.innerHTML = key
    eventCode.innerHTML = code
    eventWhich.innerHTML = which
    eventKeyCode.innerHTML = keyCode
}


// --------------------What the this?------------------------------------
// fn-Declaration
function a() {
    console.log(this)
}

a(); // this ===window
window.a(); // this ===window

// fn-Expression
let b = funtion () {
    console.log(this)
}
b(); // this ===window
window.b() // error : window.b is not a fn > expression ไม่ได้เอา fn b ไปติดกับ window

// fn-expression-ARROW
let c = () => console.log(this)
c(); // this ===window
window.c() // Error same as fn b


// ---------------- strict Mode---------------------
'use strict'
function a() {
    console.log(this) // this ===window || undefined in 'strict mode'
}

console.log(this) // this === window
a();// undefined



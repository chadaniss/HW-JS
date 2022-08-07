let x = +prompt('Enter first number');
let y = +prompt('Enter secound number');
let z = +prompt('Enter third number');

if (x>y && x>z){
    // (case "x Max")
    if(y>z){
        alert(`${x}, ${y}, ${z}`)
    } else
        alert(`${x}, ${z}, ${y}`)
} else if (y>x && y>z){
    // (case "y Max")
    if (x>z){
        alert(`${y}, ${x}, ${z}`)
    } else{
        alert(`${y}, ${z}, ${x}`)
    }
} else{
    // (case "z Max")
    if (x>y){
        alert(`${z}, ${x}, ${y}`)
    } else{
        alert(`${z}, ${y}, ${x}`)
    }
}


// let new1=0;
// let new2=0;
// let new3=0;
// new1=Math.max(x,y,z)
// new3=Math.min(x,y,z)
// new2=x+y+z-new1-new3
// alert(`${new1}, ${new2}, ${new3}`)
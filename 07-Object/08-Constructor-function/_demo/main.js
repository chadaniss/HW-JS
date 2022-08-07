//  normal fn

function myNormalFN() {
    // sone code ...
    return 5;
}

// when Execute
let result = myNormalFN()
console.log(result) // 5

// ----Condtructor FN----------

// ต้นแบบ - Prototype
function MyContructorFN() {
    // some code ...
}

// when Execute
let instance = new MyContructorFN()

//---------- Demo #1-------------
function CodeCampStudent(name,age) {
    // step1 : This == {}
    // step2 : defined Propoty
    this.name = name
    this.age = age

    // step3 : return this (autometic)
}

let user1 = new CodeCampStudent('game',25)
console.log(user1)

let user2 = new CodeCampStudent('Yun',22)
console.log(user2)
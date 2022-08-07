let userName = prompt('Enter user name');
let passWord = prompt('Enter password');

if (userName === null || userName.trim() === ''){ //เริ่มเช็คจาก userName ว่าใช่เลขไหม
    alert('username is required')
    if (passWord === null || passWord.trim() === ''){
        alert('password is required')
    }
}
else if (passWord === null || passWord.trim() === ''){ // กรณีที่ userName ถูกอยู่แล้ว มาเช็ค passWord ต่อว่าใช่เลขไหม
    alert('password is required')
}
else {
    if((userName === 'admin' && passWord === '1234') || (userName === 'john' && passWord === 'qwerty'))
        alert(`Hello, ${userName}`)
    else{
        alert('invalid username or password')
    }
}



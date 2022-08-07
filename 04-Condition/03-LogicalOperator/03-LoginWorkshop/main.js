let user = prompt('Enter youe name');
let password = '';
if(user === '' && user === undefined){
    user = 'guest';
}else if(user === 'codecamp'){
    password = prompt('Enter youe password');
    if(password === '123456'){
        user = 'codecamp';
    }else{
        alert('Wrong password')
        user = 'guest';
    }
}else{
    user = 'guest';
}
alert (`Welcome ${user}`);
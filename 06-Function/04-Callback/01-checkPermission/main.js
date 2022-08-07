function checkPermission (role,admin,guess){
    if(role==='ADMIN'){
        admin();
    }else{
        guess();
    }
}

function admin(){
    alert('ACCESS GRANTED');
}

function guess(){
    alert('ACCESS DENIED');
}

checkPermission('ADMIN',admin,guess);
checkPermission('JOB',admin,guess);
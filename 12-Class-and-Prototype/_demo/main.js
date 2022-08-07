class User { // ชื่อ class มักจะขึ้นด้วยตัวพิมพฺใหญ่
    name;
    password;
    role;

    login(password){
        console.log('Login')
    }

    changePassword(newPassword){
        console.log('Change Password')
    }
}

const a = new User();
console.log(a); //?
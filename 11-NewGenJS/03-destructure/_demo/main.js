const person = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['run','swim','shopping'],
    address: {
        province: 'BKK',
        district: 'Phathumwan'
    },
    friends: [
        {
            firstName: 'Jim',
            lastName: 'Carry',
            phone: '089999991'
        },
        {
            firstName: 'Rainny',
            lastName: 'Hor',
            phone: '089999992'
        }
    ]
};

// const {firstName,lastName,age = 20} = person; 

// อยาก rename ที่ key-------
const { firstName: fname, address } = person; 

const {
    address: {province}
} = person; //?


// ----------Destruct array---------
const numbers = [79,35,66,48];
const[firstNumber,secoundNumber] = numbers; // พูดถึงตัวเลขที่ 1, 2
const[,,,fourtNumber] = numbers;
const[a,b,...c] = numbers;
console.log(c); //?

const[d=0] = [] // สมมติเรามี empty array เราจะหา d ไม่เจอ เราสามารถกำหนดค่าเริ่มต้นให้ d ได้เลย


// ---------- Rest with object destructuring --------
const {firstName,lastName, ...otherInfo} = person;
console.log(otherInfo); // รวมก้อนหลังจาก lastname ให้

const {
    friends: [{phone: firstPhone}]
} = person;


// -------- สร้าง funtion เพื่อเรียกใช้ key -----------
const getFullName = user => {
    // console.Log(`${user.firstName} ${user.lastName}`); // เมื่อก่อนต้อง refer แบบนี้
    const {fstName, lstName } = user;
    console.log(`${fstName} ${lstName}`);
};

const getFullname1 = ({ firstName, lastName }) => {
    console.log(`${firstName} ${lastName}`);
  };
  
  getFullname({ firstName: 'John', lastName: 'Doe' });
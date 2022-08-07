//C = a * b ex. 25 = 5 * 5
for (let i = 2; i <= 100; i++) { //control เศษ
  let isPrime = true; // สมมติให้ทุกตัวเป็นจน.เฉพาะ
  for (let j = 2; j < i; j++) { //control ส่วน
    // for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false; // มีใครหารลงก่อนตัวเองแปลว่าไม่ใช่จน.เฉพาะ
      break;
    }
  }
  if (isPrime === true) {
    //or if (isPrime) {
    console.log(i);
  }
}

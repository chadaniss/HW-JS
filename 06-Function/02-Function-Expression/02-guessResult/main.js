// const showModal = alert; // alert is fn > สั่งเก็บไว้ใน showModal
// showModal("Execute modal"); // * alert : Execute modal
// // equal that > alert("Execute modal")

const showModal = alert();
showModal("Execute modal"); // **alert : '' // TypeError: showModal is not a function
const myClock = document.getElementById('clock');
const myDate = document.getElementById('date');
let rightNow = new Date();
myDate.innerHTML = `${rightNow.getDate()} / ${rightNow.getMonth() + 1} / ${rightNow.getFullYear()}`; 
myClock.innerHTML = `${rightNow.getHours()} : ${rightNow.getMinutes()} : ${rightNow.getSeconds()}`;
location.reload();

const currentDate = new Date();
let year = currentDate.getFullYear();
const targetDate =  new Date(year, 11, 01);
const birthdate = new Date(2004, 11, 01);

let age = Math.floor((currentDate.getTime() - birthdate.getTime())/31536000000);


if (currentDate > targetDate){
    year++;
    targetDate = new Date(year, 11, 01);
}



document.getElementById("age").innerHTML = age + 1;

setInterval(() => {
    const currentDate = new Date();
    let difference = Math.round((targetDate.getTime() - currentDate.getTime())/1000);
    document.getElementById("birth").innerHTML = difference;
}, 1000);



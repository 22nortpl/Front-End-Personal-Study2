const number = document.getElementById("counting-num");

const incButton1 = document.getElementById("increase");

const incButton2 = document.getElementById("decrease");

const incButton3 = document.getElementById("reset");

const incButton4 = document.getElementById("increase10");

const incButton5 = document.getElementById("decrease10");

let count = 0;

number.textContent = count;


function increaseCount() {

 count++; // count = count + 1

 number.textContent = count; // 숫자 변화 반영

}

function decreaseCount() {

 count--; // count = count + 1

 number.textContent = count; // 숫자 변화 반영

}

function resetCount() {

 count = 0; // count = count + 1

 number.textContent = count; // 숫자 변화 반영

}

function increaseCountTen() {

 count = count + 10; // count = count + 1

 number.textContent = count; // 숫자 변화 반영

}

function decreaseCountTen() {

 count = count - 10; // count = count + 1

 number.textContent = count; // 숫자 변화 반영

}

incButton1.addEventListener("click", increaseCount);

incButton2.addEventListener("click", decreaseCount);

incButton3.addEventListener("click", resetCount);

incButton4.addEventListener("click", increaseCountTen);

incButton5.addEventListener("click", decreaseCountTen);
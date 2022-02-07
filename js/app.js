// get elements 
const modal = document.querySelector(`.ismail-modal`);
const btn = document.querySelector(`#btnapply`);
const close = document.querySelector(`.close`);
const alert = document.querySelector(`.ismail-alert`); 
const alClose = document.querySelector(`.al-close`); 
const btn1 = document.querySelector(`.btn1`); 
const btn2 = document.querySelector(`.btn2`); 

btn.addEventListener(`click`, function () {
    modal.classList.add(`active`)
});

close.addEventListener(`click`, function () {
    alert.classList.add(`active`)
})

modal.addEventListener(`click`, function (e) {
    if (e.target == this) {
        modal.classList.remove(`active`)
    }
})
alClose.addEventListener(`click`, function () {
    alert.classList.remove(`active`)
})
btn1.addEventListener(`click`, function () {
    alert.classList.remove(`active`)
})
btn2.addEventListener(`click`, function () {
    modal.classList.remove(`active`)
    alert.classList.remove(`active`)
})
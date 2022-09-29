'use strict';

///////////////////////////////////////
// Section: Random Color.
///////////////////////////////////////
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(170, 255)},${randomInt(170, 255)},${randomInt(170, 255)})`;

///////////////////////////////////////////
// Section: Event Propagation: Bubbling.
///////////////////////////////////////////

document.querySelector('.btn').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.div--1').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.div--2').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.div--3').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.div--4').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

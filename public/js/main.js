const socket = io();

const header = document.querySelector('header');
const listElement = document.querySelector('main > ul');
const formElement = document.querySelector('main > form');

const createNickname = () => {
  const nickname = prompt('Please enter your nickname');
};

const main = () => {
  createNickname();
};

main();

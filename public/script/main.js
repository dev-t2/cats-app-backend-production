const socket = io();

// const header = document.querySelector('header');
// const list = document.querySelector('main > ul');
// const form = document.querySelector('main > form');

const createUser = () => {
  const nickname = prompt('Please enter your nickname');

  socket.emit('createUser', { nickname: nickname.trim() }, (nickname) => {
    console.log(`${nickname} has entered`);
  });
};

const main = () => {
  createUser();
};

main();

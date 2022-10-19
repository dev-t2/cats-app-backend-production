const socket = io('/chats');

const header = document.querySelector('header');
// const list = document.querySelector('main > ul');
// const form = document.querySelector('main > form');

const createUser = () => {
  const nickname = prompt('Please enter your nickname');

  socket.emit('createUser', { nickname: nickname.trim() }, (nickname) => {
    header.innerText = nickname;
  });

  socket.on('createUser', (nickname) => {
    console.log(nickname);
  });
};

const main = () => {
  createUser();
};

main();

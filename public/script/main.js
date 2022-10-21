const socket = io('/chats', { transports: ['websocket'] });

const header = document.querySelector('header');
const list = document.querySelector('main > ul');
const form = document.querySelector('main > form');
const input = form.querySelector('input');

const updateMessages = (message) => {
  const li = document.createElement('li');

  li.innerText = message;

  list.appendChild(li);
};

const enterUser = () => {
  const nickname = prompt('Please enter your nickname');

  socket.emit('enterUser', { nickname: nickname.trim() }, ({ nickname }) => {
    header.innerText = nickname;
  });

  socket.on('enterUser', ({ nickname }) => {
    updateMessages(`${nickname} has entered the room`);
  });

  socket.on('deleteUser', ({ nickname }) => {
    updateMessages(`${nickname} left the room`);
  });

  socket.on('createMessage', ({ nickname, content }) => {
    updateMessages(`${nickname}: ${content}`);
  });
};

const createMessage = (e) => {
  e.preventDefault();

  const content = input.value.trim();

  if (content) {
    socket.emit('createMessage', { content }, ({ content }) => {
      input.value = '';

      updateMessages(`${content}`);
    });
  }
};

const main = () => {
  enterUser();

  form.addEventListener('submit', createMessage);
};

main();

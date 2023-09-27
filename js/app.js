

function send() {
   let message = document.getElementById('message').value;
   if (message == '') {
      text = 'Вы не ввели имя';
   } else {
      text = `${message}, привет!`;
   }
   document.getElementById('result_chat').innerText = text;
}

function fami() {
   let name = document.getElementById('name').value;
   if (name == '') {
      name = 'Вы не ввели имя';
   } else {
      name = `Здравствуй, ${name}`;
   }

   document.getElementById('result_fami').innerText = name;
}



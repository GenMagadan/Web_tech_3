

function send() {
   //ввод данных из поля ввода html input
   //let x = prompt("Введите х")

   let message = document.getElementById('message').value;

   //логика

   if (message == '') {
      alert("Нужно ввести сообщение")
   }

   //Вывод данных в поле 

   document.getElementById('result').innerText = message;

   //document.getElementById('result').value = message;
   //alert(`${x} * 5 = ${resuls}`)

}

function fami() {
   let name = document.getElementById('name').value;
   if (name == '') {
      name = 'Вы не ввели имя';
   } else {
      name = `Здравствуй, ${name}`;
   }

   document.getElementById('result').innerText = name;
}



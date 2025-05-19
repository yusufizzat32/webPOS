document.querySelector('button.submit').addEventListener('click', function() {
    var name = encodeURIComponent(document.querySelector('.name input').value);
    var email = encodeURIComponent(document.querySelector('.email input').value);
    var text = encodeURIComponent(document.querySelector('.msg textarea').value);
    var message = `Hello, Tani Kopi! I'm ${name}.%0A%0A${text}%0A%0ARegards, ${name}%0A%0A${email}`;
    var url = `https://api.whatsapp.com/send?phone=6285606058061&text=${message}`;
    window.open(url);
  });
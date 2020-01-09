document //bu komutla tüm html elementlerine erişebiliyoruz.

document.querySelector('.navbar') //class adı navbar olan kısma erişiyor.

var fora = document.querySelector('.fora') // bu şekide değişkene atabiliyoruz.

fora.querySelector('img') //daha derinlere girebilyoruz

fora.querySelector('img').src = 'img/MarkalarKece.jpg' // böyle bir atama yapabiliyoruz.

fora.style.backgroundColor = 'red'

fora.remove  //içeri kaldırır

document.getElementsByTagName('img') //collection tipinde tüm img taglarını içeren bir list döner.

document.getElementsByTagName('h1')

var headers = document.getElementsByTagName('h1')

for (i = 0; i < headers.length; i++) { headers[i].style.color = 'red'; }

for (i = 0; i < headers.length; i++) { headers[i].style.display = 'none'; }
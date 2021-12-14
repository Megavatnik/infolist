const text = [
    'Огонь по штабам-контракт предполагает быстрый рейд на один из штабных комплексов,развернутых на планете.\n',
    'Задача уничтожить несколько штабных зданий и предотвратить эвакуацию офицеров.\n',
    'Ожидаемые силы противника-копье мехов,усиленное бронетехникой,стационарная оборона.\n',
    'Местность холмы. Особенности ожидается шторм. Награда 4000000+1000000 за каждый офицерский конвой.\n'
  ];
  
   let line = 0;
    let count = 0;
    let result = '';
    function typeLine() {
      let interval = setTimeout(
        () => {
          result += text[line][count]
          document.querySelector('pre').innerHTML =result +'|';
  
  
        count++;
        if (count >= text[line].length) {
          count = 0;
          line++;
          if (line == text.length) {
            clearTimeout(interval);
             document.querySelector('pre').innerHTML =result;
            return true;
          }
        }
        typeLine();
      }, getRandomInt(getRandomInt(250*2.5)))
    }
    typeLine();
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
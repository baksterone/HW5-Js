var milisec = 0,
    sec = 0,
    min = 0,
    timer = document.getElementById('timer'),
    stop = document.querySelector('.stop'),
    circle = document.querySelector('.circle'),
    list = document.querySelector('.time-list'),
    deleteList = document.querySelector('.delete'),
    start = document.querySelector('.start');

    timer.innerHTML = '00' + ':00' + ':00';


function startimer() {
    milisec++;
    if(milisec>= 100){
      sec++;
      milisec = milisec - 100;
    }
    if (sec >= 60) {
        min++;
        sec = sec - 60;
    }
      if (milisec < 10) {
          if (sec < 10) {
              if (min < 10) {
                timer.innerHTML ='0' + min + ':0' + sec + ':0' + milisec;
              } else {
                timer.innerHTML = min + ':0' + sec + ':0' + milisec;
              }
          } else {
              if (min < 10) {
                timer.innerHTML = '0' + min + ':' + sec + ':0' + milisec;
              } else {
                timer.innerHTML = min + ':' + sec + ':0' + milisec;
              }
          }
      } else {
          if (sec < 10) {
              if (min < 10) {
                timer.innerHTML = '0' + min + ':0' + sec + ':' + milisec;
              } else {
                timer.innerHTML = min + ':0' + sec + ':' + milisec;
              }
          } else {
              if (min < 10) {
                timer.innerHTML = '0' + min + ':' + sec + ':' + milisec;
              } else {
                timer.innerHTML = min + ':' + sec + ':' + milisec;
              }
          }
      }
    }

    var i = 1;
    circle.addEventListener('click', function(){
      var newLi = document.createElement('li');
      newLi.classList.add('new-li');
      newLi.innerHTML = '<p>' + 'Круг ' + i + ': ' + '</p>' + '<span>' + timer.textContent + '</span>';
      list.append(newLi);
      i++;
      clearInterval(go);
      setTimeout(function(){
        timer.innerHTML = '00' + ':00' + ':00';
      }, 500);
      setTimeout(function(){
        milisec = 0;
        sec = 0;
        min = 0;
        go = setInterval(startimer, 10);
      }, 500);
    });

    deleteList.addEventListener('click', function(){
      i = 1;
      list.innerHTML = '';
    });

    start.addEventListener('click', function() {
      if (start.textContent === 'Старт' || start.textContent === 'Продолжить'){
        go = setInterval(startimer, 10);
        start.innerHTML = 'Пауза';
        start.classList.add('stop');
      } else{
        clearInterval(go);
        start.innerHTML = 'Продолжить';
        start.classList.remove('stop');
      }
    });

    stop.addEventListener('click', function(){
      clearInterval(go);
      timer.innerHTML = '00' + ':00' + ':00';
      milisec = 0;
      sec = 0;
      min = 0;
      start.innerHTML = 'Старт';
    });

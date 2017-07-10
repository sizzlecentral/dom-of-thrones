function scene3() {

  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast

  // Character 1
  danContainer = document.createElement('div');
  stage.append(danContainer);
  danContainer.style.position = 'absolute';
  danContainer.style.width = '10%';
  danContainer.style.height = '38%';
  danContainer.style.top = '55%';
  danContainer.style.left = '25%';
  dan = document.querySelector('#danerys');
  danContainer.append(dan);
  dan.style.width = '70%';
  dan.style.position = 'absolute';
  dan.style.top = 0;
  dress = document.querySelector('#blue-dress');
  danContainer.append(dress);
  dress.style.position = 'absolute';
  dress.style.bottom = 0;


  // Character 2
  droContainer = document.createElement('div');
  stage.append(droContainer);
  droContainer.style.position = 'absolute';
  droContainer.style.width = '8%';
  droContainer.style.height = '31%';
  droContainer.style.top = '55%';
  droContainer.style.left = '65%';
  dro = document.querySelector('#drogo');
  droContainer.append(dro);
  dro.style.width = '70%';
  dro.style.position = 'absolute';
  dro.style.top = 0;
  dro.style.left = '20%';
  bulk = document.querySelector('#bulky-man');
  droContainer.append(bulk);
  bulk.style.position = 'absolute';
  bulk.style.bottom = 0;

  // Setup Props

  // Prop 1
  egg = document.querySelector('#egg');
  stage.append(egg);
  egg.style.position = 'absolute';
  egg.style.top = '77%';
  egg.style.left = '26%';
  egg.style.height = '10%';

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {
    egg.style.top = '20%';
    egg.style.left = '33%';
    egg.style.transform = 'rotateZ(220deg)';
  })

  frame(function() {
    egg.style.top = '80%';
    egg.style.left = '70%';
    egg.style.transform = 'rotateZ(140deg)';
  })

  frame(function() {
    egg.style.top = '20%';
    egg.style.left = '33%';
    egg.style.transform = 'rotateZ(260deg)';
  })

  frame(function() {
    egg.style.top = '80%';
    egg.style.left = '33%';
    egg.style.transform = 'rotateZ(180deg)';
  })

}

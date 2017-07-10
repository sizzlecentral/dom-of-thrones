function scene2() {

  // Setup Stage
  stage = document.querySelector('#stage');
  castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast

  // Character 1
  nedContainer = document.createElement('div');
  stage.append(nedContainer);
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '37%';
  nedContainer.style.top = '55%';
  nedContainer.style.left = '25%';
  ned = document.querySelector('#ned');
  nedContainer.append(ned);
  leather = document.querySelector('#leather-armour');
  nedContainer.append(leather);
  ned.style.width = '70%';
  ned.style.position = 'absolute';
  ned.style.top = 0;
  leather.style.position = 'absolute';
  leather.style.bottom = 0;

  // Character 2
  joffContainer = document.createElement('div');
  joffContainer.id = 'joff-container';
  stage.append(joffContainer);
  joffContainer.style.width = '8%';
  joffContainer.style.position = 'absolute';
  joffContainer.style.height = '31%';
  joffContainer.style.top = '55%';
  joffContainer.style.left = '55%';
  joff = document.querySelector('#joffrey');
  joffContainer.append(joff);
  joff.style.width = '75%';
  joff.style.position = 'absolute';
  joff.style.left = '33%';
  kingWardrobe = document.querySelector('#king');
  joffContainer.append(kingWardrobe);
  kingWardrobe.style.position = 'absolute';
  kingWardrobe.style.bottom = 0;

  // Setup Props

  // Prop 1
  sword = document.querySelector('#sword');
  stage.append(sword);
  sword.style.position = 'absolute';
  sword.style.top = '77%';
  sword.style.left = '31%';
  sword.style.height = '5%';
  sword.style.transform = 'rotateY(150deg)';

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })

}
